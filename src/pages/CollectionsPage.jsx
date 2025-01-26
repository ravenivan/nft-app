import React, { useContext, useEffect, useState } from "react";
import SelectedCollection from "../components/home/SelectedCollection";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Card from "../components/ui/Card";
import CollectionsSkeleton from "../components/ui/CollectionsSkeleton";

export default function CollectionsPage() {

  const { fetchData } = useContext(AppContext)

  const [data, setData] = useState(null)
  const [cardsShown, setCardsShown] = useState(12)

  const handleLoadMore = () => {
    if (cardsShown === data.length) return
    if (cardsShown + 6 < data.length) {
      setCardsShown(prev => prev + 6)
    } else {
      setCardsShown(data.length)
    }
  }

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const fetchedData = await fetchData("https://remote-internship-api-production.up.railway.app/collections")
        setData(fetchedData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchCollections()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="collections-page__title">Collections</h1>
        <div className="collections__body">
          {data ? (
            data.slice(0, cardsShown).map((item, index) => (
              <div className="collection-column" key={index}>
                <Card item={item}/>
              </div>
            ))
          ) : (
            new Array(12).fill(0).map((_, index) => (
              <div className="collection-column" key={index}>
                <CollectionsSkeleton key={index}/>
              </div>
            ))
          )}
        </div>
        <button className="collections-page__button"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      </div>
    </div>
  );
}
