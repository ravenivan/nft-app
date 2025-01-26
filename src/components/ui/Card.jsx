import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({item}) {
  return (
    <Link to={`/collection/${item.collectionId || item.id}`} className="collection">
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
  )
}
