import React from "react";
import "./Style/women.css";

import Cloth1 from "../assets/cloth pic/cloth1.webp";
import Cloth2 from "../assets/cloth pic/cloth2.webp";
import Cloth3 from "../assets/cloth pic/cloth3.webp";
import Cloth4 from "../assets/cloth pic/cloth4.webp";
import Cloth5 from "../assets/cloth pic/cloth5.webp";
import Cloth6 from "../assets/cloth pic/cloth6.webp";
import Cloth7 from "../assets/cloth pic/cloth7.webp";
import Cloth8 from "../assets/cloth pic/cloth8.webp";

import Header from "./Header";
import Footer from "./Footer";

function Women() {
  return (
    <>
      <Header />

      <div className="products">
        <div className="card">
          <img src={Cloth1} alt="Cloth 1" />
          <h3>Women's Top</h3>
          <p>₹799</p>
        </div>

        <div className="card">
          <img src={Cloth2} alt="Cloth 2" />
          <h3>Women's Dress</h3>
          <p>₹999</p>
        </div>

        <div className="card">
          <img src={Cloth3} alt="Cloth 3" />
          <h3>Kurti</h3>
          <p>₹899</p>
        </div>

        <div className="card">
          <img src={Cloth4} alt="Cloth 4" />
          <h3>Casual Wear</h3>
          <p>₹1199</p>
        </div>

        <div className="card">
          <img src={Cloth5} alt="Cloth 5" />
          <h3>Fashion Top</h3>
          <p>₹699</p>
        </div>

        <div className="card">
          <img src={Cloth6} alt="Cloth 6" />
          <h3>Stylish Dress</h3>
          <p>₹1299</p>
        </div>

        <div className="card">
          <img src={Cloth7} alt="Cloth 7" />
          <h3>Party Wear</h3>
          <p>₹1499</p>
        </div>

        <div className="card">
          <img src={Cloth8} alt="Cloth 8" />
          <h3>Western Wear</h3>
          <p>₹999</p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Women;