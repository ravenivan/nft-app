import React, { useContext, useEffect, useState } from "react";
import VerifiedIcon from "../../assets/verified.png";
import TrendingCollection from "../../assets/trending-collection.avif";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import TrendingSkeleton from "../ui/TrendingSkeleton";

export default function Trending() {

  const { fetchData } = useContext(AppContext)

  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchSelectedCollection = async () => {
      try {
        const fetchedData = await fetchData("https://remote-internship-api-production.up.railway.app/trendingNFTs")
        setData(fetchedData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchSelectedCollection()
  }, [])

  return (
    <section id="trending">
      <div className="container">
        <div className="row trending__row">
          <div className="trending__header">
            <h2 className="trending__header__title">Trending NFTs</h2>
            <Link className="trending__header__button" to={"/collections"}>
              View All
            </Link>
          </div>
          <div className="trending__body">
            <div className="trending-column">
              <div className="trending-column__header">
                <div className="trending-column__header__rank">#</div>
                <div className="trending-column__header__collection">
                  Collection
                </div>
                <div className="trending-column__header__price">
                  Floor Price
                </div>
                <div className="trending-column__header__price">Volume</div>
              </div>
              <div className="trending-column__body">
                {data ? (
                  data.slice(0, 5).map((item, index) => (
                    <Link
                      to={"/collection"}
                      key={index}
                      className="trending-collection"
                    >
                      <div className="trending-collection__rank">{item.rank}</div>
                      <div className="trending-collection__collection">
                        <figure className="trending-collection__img__wrapper">
                          <img
                            src={item.imageLink}
                            alt=""
                            className="trending-collection__img"
                          />
                        </figure>
                        <div className="trending-collection__name">
                          {item.title}
                        </div>
                        <img
                          src={VerifiedIcon}
                          className="trending-collection__verified"
                        />
                      </div>
                      <div className="trending-collection__price">
                        <span className="trending-collection__price__span">
                          {Number.parseFloat(item.floor, 10).toFixed(2)} ETH
                        </span>
                      </div>
                      <div className="trending-collection__volume">
                        <span className="trending-collection__volume__span">
                          {item.totalVolume} ETH
                        </span>
                      </div>
                    </Link>
                  ))
                ) : (
                  new Array(5).fill(0).map((_, index) => <TrendingSkeleton index={index + 1} key={index} />)
                )}
              </div>
            </div>
            <div className="trending-column">
              <div className="trending-column__header trending-column__header2">
                <div className="trending-column__header__rank">#</div>
                <div className="trending-column__header__collection">
                  Collection
                </div>
                <div className="trending-column__header__price">
                  Floor Price
                </div>
                <div className="trending-column__header__price">Volume</div>
              </div>
              <div className="trending-column__body">
                {data ? (
                  data.slice(5, 10).map((item, index) => (
                    <Link
                      to={"/collection"}
                      key={index}
                      className="trending-collection"
                    >
                      <div className="trending-collection__rank">{item.rank}</div>
                      <div className="trending-collection__collection">
                        <figure className="trending-collection__img__wrapper">
                          <img
                            src={item.imageLink}
                            alt=""
                            className="trending-collection__img"
                          />
                        </figure>
                        <div className="trending-collection__name">
                          {item.title}
                        </div>
                        <img
                          src={VerifiedIcon}
                          className="trending-collection__verified"
                        />
                      </div>
                      <div className="trending-collection__price">
                        <span className="trending-collection__price__span">
                          {Number.parseFloat(item.floor, 10).toFixed(2)} ETH
                        </span>
                      </div>
                      <div className="trending-collection__volume">
                        <span className="trending-collection__volume__span">
                          {item.totalVolume} ETH
                        </span>
                      </div>
                    </Link>
                  ))
                ) : (
                  new Array(5).fill(0).map((_, index) => <TrendingSkeleton index={index + 6} key={index+5} />)
                )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
