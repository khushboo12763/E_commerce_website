import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Style/beauty.css";

import Product1 from "../assets/beauty pic/product1.webp";
import Product2 from "../assets/beauty pic/product2.webp";
import Product3 from "../assets/beauty pic/product3.webp";
import Product4 from "../assets/beauty pic/product4.webp";
import Product5 from "../assets/beauty pic/product5.webp";
import Product6 from "../assets/beauty pic/product6.webp";
import Product7 from "../assets/beauty pic/product7.webp";
import Product8 from "../assets/beauty pic/product8.webp";

function Beauty() {
  return (
    <>
      <Header />

      <div className="products">
        <div className="card">
          <img src={Product1} alt="Beauty Product" />
          <h3>Lipstick</h3>
          <p>₹499</p>
        </div>

        <div className="card">
          <img src={Product2} alt="Beauty Product" />
          <h3>Foundation</h3>
          <p>₹799</p>
        </div>

        <div className="card">
          <img src={Product3} alt="Beauty Product" />
          <h3>Face Wash</h3>
          <p>₹299</p>
        </div>

        <div className="card">
          <img src={Product4} alt="Beauty Product" />
          <h3>Compact Powder</h3>
          <p>₹599</p>
        </div>

        <div className="card">
          <img src={Product5} alt="Beauty Product" />
          <h3>Mascara</h3>
          <p>₹399</p>
        </div>

        <div className="card">
          <img src={Product6} alt="Beauty Product" />
          <h3>Perfume</h3>
          <p>₹999</p>
        </div>

        <div className="card">
          <img src={Product7} alt="Beauty Product" />
          <h3>Moisturizer</h3>
          <p>₹699</p>
        </div>

        <div className="card">
          <img src={Product8} alt="Beauty Product" />
          <h3>Sunscreen</h3>
          <p>₹549</p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Beauty;