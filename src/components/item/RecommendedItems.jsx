import { faShoppingBag, faTableCells } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

export default function RecommendedItems({ collectionData, itemId }) {

  return (
    <section id="recommended-items">
      <div className="container">
        <div className="row recommended-items__row">
          <div className="recommended-items__wrapper">
            <div className="recommended-items__header">
              <FontAwesomeIcon icon={faTableCells} />
              <h3 className="recommended-items__header__title">
                More from this collection
              </h3>
            </div>
            <div className="recommended-items__body">
              <Swiper
                style={{
                  "--swiper-navigation-size": "40px",
                  "--swiper-navigation-color": "white",
                  "--swiper-navigation-background-color": 'black'
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1
                  },
                  480: {
                    slidesPerView: 2
                  },
                  768: {
                    slidesPerView: 3
                  },
                  1024: {
                    slidesPerView: 4
                  },
                  1200: {
                    slidesPerView: 5
                  },
                  1600: {
                    slidesPerView: 6
                  }
                }}
                modules={[Navigation]}
                slidesPerView={6}
                spaceBetween={16}
                loop={true}
                navigation
              >
                {collectionData && collectionData.items.map((item, index) => (
                  item.itemId !== itemId && (
                      <SwiperSlide key={`${item.itemId}-${index}`} >
                        <Link to={`/item/${item.itemId}`} className="item">
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
                            <button className="item__see-more__button">
                              See More
                            </button>
                            <div className="item__see-more__icon">
                              <FontAwesomeIcon icon={faShoppingBag} />
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                  )
                ))}
              </Swiper>
            </div>
            <div className="recommended-items__footer">
              {collectionData && (
                <Link
                  to={`/collection/${collectionData.id}`}
                  className="recommended-items__footer__button"
                >
                  View Collection
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
