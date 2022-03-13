import React from "react";
import Navbar from "./Navbar";
import products from "../db.json";
import { useEffect, useState } from "react";
import "./Landingpage.css";
import { nanoid } from "nanoid";

function Landingpage() {
  const [productlist, setProductlist] = useState([]);

  const [toshow, setToshow] = useState([]);

  useEffect(() => {
    setProductlist(products.productsData);
    setToshow(products.productsData);
  }, []);

  const handleSort = (val) => {
    if (val == "all") {
      setToshow(products.productsData);
      return;
    }
    let ans = productlist.filter((e) => {
      let tem = e.type.toUpperCase();

      if (tem.startsWith(val.toUpperCase())) return e;
    });
    console.log("ans:", ans);
    setToshow(ans);
  };

  const sortFunction = (val) => {
    let ans = productlist.filter((e) => {
      let tem = e.name.toUpperCase();

      if (tem.startsWith(val.toUpperCase())) return e;
    });
    console.log("ans:", ans);
    setToshow(ans);
  };

  console.log("productlist:", productlist);
  return (
    <div>
      <Navbar />
      <div className="top-container">
        <h1>All deals and coupons.</h1>
        <p>
          The best online deals and coupons, including Klarna exclusives,
          updated daily.
        </p>
        <img src="https://i.ibb.co/0sj817h/Capture.jpg" alt="" />
      </div>
      <div className="container">
        <div className="left-side">
          <div className="categories">
            <h1>Categories</h1>
            <p onClick={() => handleSort("all")}>All</p>
            <p onClick={() => handleSort("babies")}>Babies & Kids</p>
            <p onClick={() => handleSort("clothes")}>Clothing & Apparel</p>
            <p onClick={() => handleSort("computer")}>
              Computers & Accessories
            </p>
            <p onClick={() => handleSort("shoes")}>shoes</p>
            <p onClick={() => handleSort("perfume")}>Perfumes</p>
            <p>Gifts</p>
            <p>Health & Beauty</p>
            <p>Holidays & Occasions</p>
            <p>Household</p>
          </div>
        </div>
        <div className="right-side">
          <div className="search">
            {" "}
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => sortFunction(e.target.value)}
            />{" "}
          </div>
          <div className="all-products">
            {toshow.map((e) => (
              <div className="each-item" key={nanoid(4)}>
                <img src={e.img} alt="" />
                <div className="description">
                  <p>
                    {" "}
                    <strong> {e.name} </strong>
                  </p>
                  <p>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
