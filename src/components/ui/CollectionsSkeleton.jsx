import React from 'react'
import Skeleton from './Skeleton'
import { SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'

export default function CollectionsSkeleton() {
  return (
    <Link to="/collection" className="collection">
      <Skeleton width="100%" height="180px" borderRadius={0} />
      <div className="collection__info">
        <h3 className="collection__name"></h3>
        <div className="collection__stats">
          <div className="collection__stat">
            <span className="collection__stat__label">
              <Skeleton width="45%" height="20px" borderRadius={4} />
            </span>
            <span className="collection__stat__data">
              <Skeleton width="80%" height="20px" borderRadius={4} />
            </span>
          </div>
          <div className="collection__stat">
            <span className="collection__stat__label">
              <Skeleton width="45%" height="20px" borderRadius={4} />
            </span>
            <span className="collection__stat__data">
              <Skeleton width="80%" height="20px" borderRadius={4} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
