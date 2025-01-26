import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CollectionItems({data}) {

  const [items, setItems] = useState(data.items);
  const [itemsShown, setItemsShown] = useState(12);
  const [sort, setSort] = useState("")

  const handleLoadMore = () => {
    if (itemsShown === items.length) return
    if (itemsShown + 6 < items.length) {
      setItemsShown(prev => prev + 6)
    } else {
      setItemsShown(data.length)
    }
  }

  const sortHighToLow = () => {
    const sorted = [...items].sort((a, b) => b.price - a.price)
    console.log(sorted)
    setItems(sorted)
    console.log("sorted")
  }

  const sortLowToHigh= () => {
    const sorted = [...items].sort((a, b) => a.price - b.price)
    setItems(sorted)
  }

  useEffect(() => {
    if (sort === "high") {
      sortHighToLow()
    } else if (sort === "low") {
      sortLowToHigh()
    } else {
      setItems(data.items)
    }
    
  }, [sort])

  return (
    <section id="collection-items">
      <div className="row collection-items__row">
        <div className="collection-items__header">
          <div className="collection-items__header__left">
            <span className="collection-items__header__live">
              <div className="green-pulse"></div>
              Live
            </span>
            <span className="collection-items__header__results">
              {data.items.length} results
            </span>
          </div>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="collection-items__header__sort">
            <option value="" default>
              Default
            </option>
            <option value="high">Price high to low</option>
            <option value="low">Price low to high</option>
          </select>
        </div>
        <div className="collection-items__body">
          {items.slice(0,itemsShown).map((item, index) => (
            <div className="item-column" key={index}>
              <Link to={"/item"} key={item.itemId} className="item">
                <figure className="item__img__wrapper">
                  <img
                    src={item.imageLink}
                    alt=""
                    className="item__img"
                  />
                </figure>
                <div className="item__details">
                  <span className="item__details__name">{item.title}</span>
                  <span className="item__details__price">{item.price} ETH</span>
                  <span className="item__details__last-sale">
                    Last sale: {item.lastSale} ETH
                  </span>
                </div>
                <div className="item__see-more">
                  <button className="item__see-more__button">See More</button>
                  <div className="item__see-more__icon">
                    <FontAwesomeIcon icon={faShoppingBag} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <button className="collection-page__button"
        onClick={handleLoadMore}
      >
        Load more
      </button>
    </section>
  );
}
