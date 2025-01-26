import React from 'react'
import Skeleton from './Skeleton'

export default function CollectionInfoSkeleton() {
  return (
    <section id="collection-info">
      <div className="row">
        <div className="collection-info__wrapper">
          <div className="collection-info__description">
            <Skeleton height={"20px"} width={"100%"} borderRadius={4}/>
            <Skeleton height={"20px"} width={"100%"} borderRadius={4}/>
            <Skeleton height={"20px"} width={"75%"} borderRadius={4}/>
          </div>
          <div className="collection-info__details">
            <span className="collection-info__detail">
              <Skeleton height={"20px"} width={"80px"} borderRadius={4}/>
            </span>
            
            <span className="collection-info__detail">
              <Skeleton height={"20px"} width={"150px"} borderRadius={4}/>
            </span>
            
            <span className="collection-info__detail">
              <Skeleton height={"20px"} width={"150px"} borderRadius={4}/>
            </span>
            
            <span className="collection-info__detail">
              <Skeleton height={"20px"} width={"125px"} borderRadius={4}/>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
