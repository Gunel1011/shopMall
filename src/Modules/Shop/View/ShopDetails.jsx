import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import praducts from "../../../db/product";
import { FaStar } from "react-icons/fa";

const ShopDetails = () => {
  const { productId } = useParams();
  const [prductDetails, setPrductDetails] = useState({
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });
  const getData = () => {
    const finded = praducts.find((item) => item.id === Number(productId));
    if (finded) {
      setPrductDetails(finded);
    }
  };
  useEffect(() => {
    getData();
  }, [productId]);
  return (
    <div>
      <div className="card">
        <div className="leftSide">
          <div className="img">
            <img src={prductDetails.image} alt={prductDetails.title} />
          </div>
        </div>
        <div className="rightSide">
          <h2 className="title">{prductDetails.title}</h2>
          <p className="description">{prductDetails.description}</p>
          <span className="categor">{prductDetails.category}</span>
          <p className="rate">
            {prductDetails.rating.rate}
            <FaStar color="gold" />
          </p>
          <p className="count">{prductDetails.rating.count}</p>
          <p className="price">{prductDetails.price} ₼</p>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
