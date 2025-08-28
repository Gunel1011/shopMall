import React, { useEffect, useState } from "react";
import praductlist from "../../../db/product";
import { data, Link } from "react-router-dom";
const Shop = () => {
  const [praducts, setProducts] = useState();

  useEffect(() => {
    setProducts(praductlist);
  }, []);
  return (
    <section className="shop">
      <div className="container">
        <div className="row">
          <h2 className="titleShop">my shop</h2>
          <div className="card">
            {praductlist.map((item) => (
              <Link
                to={`/shop-details/${item.id}`}
                className="productCard"
                key={item.id}
              >
                <div className="img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="content">
                  <h2 className="title">{item.title}</h2>
                  <p className="price">{item.price} ₼</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
