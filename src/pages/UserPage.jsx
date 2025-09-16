import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Skeleton from "../components/ui/Skeleton";

export default function UserPage() {

  const { id } = useParams();
  const { fetchData } = useContext(AppContext)

  const [data, setData] = useState(null);
  const [items, setItems] = useState([]);

  const [itemsShown, setItemsShown] = useState(12)
  const [sort, setSort] = useState("")

  const handleLoadMore = () => {
    if (itemsShown === items.length) return
    if (itemsShown + 6 < items.length) {
      setItemsShown(prev => prev + 6)
    } else {
      setItemsShown(items.length)
    }
  }

  const sortHighToLow = () => {
    const sorted = [...items].sort((a, b) => b.price - a.price)
    setItems(sorted)
  }

  const sortLowToHigh= () => {
    const sorted = [...items].sort((a, b) => a.price - b.price)
    setItems(sorted)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchUserPage = async () => {
      try {
        const fetchedData = await fetchData(`https://remote-internship-api-production.up.railway.app/user/${id}`)
        console.log("Fetched user data:", fetchedData);
        setData(fetchedData)
        setItems(fetchedData.items)
      } catch(error) {
        console.error(error)
      }
    }

    fetchUserPage()
    console.log("Fetched user data:");
  }, []);

  useEffect(() => {
    if (sort === "high") {
      sortHighToLow()
    } else if (sort === "low") {
      sortLowToHigh()
    } else {
      setItems(data ? data.items : [])
    }
  }, [sort])
  

  return (
    <>
      {data ? (
        <>
          <header
            style={{
              backgroundImage: `url(${data.imageLink})`,
            }}
            id="user-header"
          ></header>

          <section id="user-info">
            <div className="row">
              <div className="user-info__wrapper">
                <figure className="user-info__img__wrapper">
                  <img
                    src={`${data.profilePicture}`}
                    alt=""
                    className="user-info__img"
                  />
                </figure>
                <h1 className="user-info__name">{data.name}</h1>
                <div className="user-info__details">
                  <span className="user-info__wallet">
                    <FontAwesomeIcon
                      icon={faEthereum}
                      className="user-info__wallet__icon"
                    />
                    <span className="user-info__wallet__data">{data.walletCode}</span>
                  </span>
                  <span className="user-info__year">
                    <span className="user-info__year__data">
                      Joined {data.creationDate}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section id="user-items">
            <div className="row user-items__row">
              <div className="user-items__header">
                <div className="user-items__header__left">
                  <span className="user-items__header__text">163 items</span>
                </div>
                <select value={sort} onChange={(e) => setSort(e.target.value)} className="user-items__header__sort">
                  <option value="" default>Default</option>
                  <option value="high">Price high to low</option>
                  <option value="low">Price low to high</option>
                </select>
              </div>
              <div className="user-items__body">
                {items.slice(0, itemsShown).map((item, index) => (
                  <div className="item-column" key={index}>
                    <Link to={`/item/${item.itemId}`} className="item">
                      <figure className="item__img__wrapper">
                        <img
                          src={`${item.imageLink}`}
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
                      <div className="item__see-more" href="#">
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
        </>
      ) : (
        <div className="selected-collection">
          <Skeleton width={"100%"} height={"100%"} border-radius={"0px"} />
        </div>

      )}
    </>
  );
}
