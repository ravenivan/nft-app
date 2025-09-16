import React, { useContext, useEffect, useState } from "react";
import SelectedItemVideo from "../../assets/selected-collection.mp4";
import SelectedItemThumbnail from "../../assets/selected-collection-thumbnail.jpg";
import SelectedItemLogo from "../../assets/selected-collection-logo.avif";
import VerifiedIcon from "../../assets/verified.png";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Skeleton from "../ui/Skeleton";

export default function SelectedCollection() {

  const { fetchData } = useContext(AppContext)

  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchSelectedCollection = async () => {
      try {
        const fetchedData = await fetchData("https://remote-internship-api-production.up.railway.app/selectedCollection")
        setData(fetchedData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchSelectedCollection()
  }, [])

  return (
    <header>
      {data ? (
        <div className="selected-collection">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={data.thumbnail}
            src={data.videoLink}
            className="selected-collection__bg"
          />
          <div className="selected-collection__description">
            <img
              src={SelectedItemLogo}
              alt=""
              className="selected-collection__logo"
            />
            <h1 className="selected-collection__title">
              {data.title}
            </h1>
            <Link to={`/user/${data.creatorId}`} className="selected-collection__author">
              By {data.creator}
              <img
                src={VerifiedIcon}
                className="selected-collection__author__verified"
              />
            </Link>
            <div className="selected-collection__details">{data.amountOfItems} items · {data.floorPrice} ETH</div>
            <Link to={`/collection/${data.collectionId}`} className="selected-collection__button">
              <div className="green-pulse"></div>
              View Collection
            </Link>
          </div>
        </div>
      ) : (
        <div className="selected-collection">
          <Skeleton width={"100%"} height={"100%"} border-radius={"0px"} />
        </div>
      )}
    </header>
  );
}
