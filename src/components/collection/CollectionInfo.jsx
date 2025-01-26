import React from "react";

export default function CollectionInfo({data}) {
  return (
    <section id="collection-info">
      <div className="row">
        <div className="collection-info__wrapper">
          <p className="collection-info__description">
            {data.description}
          </p>
          <div className="collection-info__details">
            <span className="collection-info__detail">
              Items
              <span className="collection-info__detail__data"> {data.items.length}</span>
            </span>
            ·
            <span className="collection-info__detail">
              Created
              <span className="collection-info__detail__data"> {data.createdDate}</span>
            </span>
            ·
            <span className="collection-info__detail">
              Creator earnings
              <span className="collection-info__detail__data"> {data.creatorEarnings}%</span>
            </span>
            ·
            <span className="collection-info__detail">
              Chain
              <span className="collection-info__detail__data"> {data.chain}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
