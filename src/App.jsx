import React from "react";
import { Route, Routes } from "react-router-dom";
import Shop from "./Modules/Shop/View/Shop";
import ShopDetails from "./Modules/Shop/View/ShopDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/shop-details/:productId" element={<ShopDetails />} />
    </Routes>
  );
};

export default App;
