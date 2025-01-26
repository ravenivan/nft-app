import React from "react";
import Skeleton from "./Skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";


export default function CollectionItems({ data }) {

  return (
    <section id="collection-items">
      <div className="row collection-items__row">
        <div className="collection-items__header">
          <div className="collection-items__header__left">
            <span className="collection-items__header__live">
              <Skeleton height={"20px"} width={"55px"} borderRadius={4} />
            </span>
            <span className="collection-items__header__results">
              <Skeleton height={"20px"} width={"80px"} borderRadius={4} />
            </span>
          </div>
          <Skeleton height={"50px"} width={"250px"} borderRadius={8} />
        </div>
        <div className="collection-items__body">
          {
            new Array(12).fill(0).map((_, index) => (
              <div className="item-column" key={index}>
                <div className="item">
                  <figure className="item__img__wrapper">
                    <Skeleton height={"100%"} width={"100%"} borderRadius={0} />
                  </figure>
                  <div className="item__details">
                    <Skeleton height={"18px"} width={"30%"} borderRadius={4} />
                    <Skeleton height={"18px"} width={"20%"} borderRadius={4} />
                    <Skeleton height={"18px"} width={"50%"} borderRadius={4} />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </section>
  );
}
