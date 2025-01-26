import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CollectionsSkeleton from "../ui/CollectionsSkeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import Card from "../ui/Card";

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
                      <Card item={item} />
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
          </div>
        </div>
      </div>
    </section>
  );
}
