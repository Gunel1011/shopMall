import React from "react";
import { useParams } from "react-router-dom";
import praducts from "../../../db/product";
import { FaStar } from "react-icons/fa";

const ShopDetails = () => {
  const { productId } = useParams();
  const data = praducts.find((item) => item.id === Number(productId));
  return (
    <div>
      <div className="card">
        <div className="leftSide">
          <div className="img">
            <img src={data.image} alt={data.title} />
          </div>
        </div>
        <div className="rightSide">
          <h2 className="title">{data.title}</h2>
          <p className="description">{data.description}</p>
          <span className="categor">{data.category}</span>
          <p className="rate">
            {data.rating.rate}
            <FaStar color="gold" />
          </p>
          <p className="count">{data.rating.count}</p>
          <p className="price">{data.price} ₼</p>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
