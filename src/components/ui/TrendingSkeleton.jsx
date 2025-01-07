import React from 'react'
import Skeleton from './Skeleton'

export default function TrendingSkeleton({ index }) {
  return (
    <div className='trending-collection'>
      <div className="trending-collection__rank">{index}</div>
      <div className="trending-collection__collection">
        <figure className="trending-collection__img__wrapper">
          <Skeleton width="100%" height="100%" borderRadius={"8px"} />
        </figure>
        <div className="trending-collection__name">
          <Skeleton width="150px" height="20px" borderRadius={"4px"} />
        </div>
      </div>
      <div className="trending-collection__price">
        <span className="trending-collection__price__span">
          <Skeleton width="75px" height="20px" borderRadius={"4px"} />
        </span>
      </div>
      <div className="trending-collection__volume">
        <span className="trending-collection__volume__span">
          <Skeleton width="75px" height="20px" borderRadius={"4px"} />
        </span>
      </div>
    </div>
  )
}

/* 
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
                            11.55 ETH
                          </span>
                        </div>
                        <div className="trending-collection__volume">
                          <span className="trending-collection__volume__span">
                            {item.totalVolume} ETH
                          </span>
                        </div>
*/