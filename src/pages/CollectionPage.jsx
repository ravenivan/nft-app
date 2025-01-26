import React, { useContext, useEffect, useState } from "react";
import CollectionHeader from "../components/collection/CollectionHeader";
import CollectionInfo from "../components/collection/CollectionInfo";
import CollectionItems from "../components/collection/CollectionItems";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import CollectionHeaderSkeleton from "../components/ui/CollectionHeaderSkeleton";
import CollectionInfoSkeleton from "../components/ui/CollectionInfoSkeleton";
import CollectionItemsSkeleton from "../components/ui/CollectionItemsSkeleton";

export default function CollectionPage() {
  const { id } = useParams();
  const { fetchData } = useContext(AppContext)

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const fetchedData = await fetchData(`https://remote-internship-api-production.up.railway.app/collection/${id}`)
        setData(fetchedData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchCollection()
  }, [id])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {
        data ? (
          <>
            <CollectionHeader data={data} />
            <CollectionInfo data={data} />
            <CollectionItems data={data} />
          </>
        ) : (
          <>
            <CollectionHeaderSkeleton />
            <CollectionInfoSkeleton />
            <CollectionItemsSkeleton />
          </>
        )
      }
    </>
  );
}
