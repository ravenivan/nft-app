import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CollectionsSkeleton from "../ui/CollectionsSkeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

export default function PopularCollections() {

  const { fetchData } = useContext(AppContext)

  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchPopularCollection = async () => {
      try {
        const fetchedData = await fetchData("https://remote-internship-api-production.up.railway.app/popularCollections")
        setData(fetchedData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchPopularCollection()
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <section id="popular-collections">
      <div className="container">
        <div className="row">
          <h2 className="popular-collections__title">Popular Collections</h2>
          <div className="popular-collections__body">
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
              {data ? (
                data.map((item, index) => (
                  <div className="collection-column" key={index}>
                    <SwiperSlide key={item.collectionId}>
                      <Link to={`/collection/${item.collectionId}`} className="collection">
                        <img
                          src={item.imageLink}
                          alt=""
                          className="collection__img"
                        />
                        <div className="collection__info">
                          <h3 className="collection__name">{item.title}</h3>
                          <div className="collection__stats">
                            <div className="collection__stat">
                              <span className="collection__stat__label">Floor</span>
                              <span className="collection__stat__data">{Number.parseFloat(item.floor, 10).toFixed(2)} ETH</span>
                            </div>
                            <div className="collection__stat">
                              <span className="collection__stat__label">
                                Total Volume
                              </span>
                              <span className="collection__stat__data">{item.totalVolume} ETH</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  </div>

                ))
              ) : (
                new Array(7).fill(0).map((_, index) => (
                  <SwiperSlide key={`skeleton-${index}`}>
                    <CollectionsSkeleton />
                  </SwiperSlide>
                ))
              )}
            </Swiper>
            {/* {data && data.map((item, index) => (
              <div className="collection-column">
                <Link to="/collection" key={index} className="collection">
                  <img
                    src={item.imageLink}
                    alt=""
                    className="collection__img"
                  />
                  <div className="collection__info">
                    <h3 className="collection__name">{item.title}</h3>
                    <div className="collection__stats">
                      <div className="collection__stat">
                        <span className="collection__stat__label">Floor</span>
                        <span className="collection__stat__data">{Number.parseFloat(item.floor, 10).toFixed(2)} ETH</span>
                      </div>
                      <div className="collection__stat">
                        <span className="collection__stat__label">
                          Total Volume
                        </span>
                        <span className="collection__stat__data">{item.totalVolume} ETH</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
}
