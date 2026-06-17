import React from "react";
import "./Style/shoes.css";

import Shoe1 from "../assets/shoes pic/shoes1.webp";
import Shoe2 from "../assets/shoes pic/shoes2.webp";
import Shoe3 from "../assets/shoes pic/shoes 3.webp";
import Shoe4 from "../assets/shoes pic/shoes4.webp";
import Shoe5 from "../assets/shoes pic/shoes5.webp";
import Shoe6 from "../assets/shoes pic/shoes6.webp";
import Shoe7 from "../assets/shoes pic/shoes7.webp";
import Shoe8 from "../assets/shoes pic/shoes8.webp";

import Header from "./Header";
import Footer from "./Footer";

function Shoes() {
  return (
    <>
      <Header />

      <div className="products">

  <div className="card">
    <img src={Shoe1} alt="Shoe 1" />
    <h3>Nike Shoes</h3>
    <p>₹1999</p>
  </div>

  <div className="card">
    <img src={Shoe2} alt="Shoe 2" />
    <h3>Puma Shoes</h3>
    <p>₹2499</p>
  </div>

  <div className="card">
    <img src={Shoe3} alt="Shoe 3" />
    <h3>Adidas Shoes</h3>
    <p>₹2999</p>
  </div>

  <div className="card">
    <img src={Shoe4} alt="Shoe 4" />
    <h3>Reebok Shoes</h3>
    <p>₹3499</p>
  </div>

  <div className="card">
    <img src={Shoe5} alt="Shoe 5" />
    <h3>Bata Shoes</h3>
    <p>₹1599</p>
  </div>

  <div className="card">
    <img src={Shoe6} alt="Shoe 6" />
    <h3>Campus Shoes</h3>
    <p>₹1899</p>
  </div>

  <div className="card">
    <img src={Shoe7} alt="Shoe 7" />
    <h3>Sparx Shoes</h3>
    <p>₹1399</p>
  </div>

  <div className="card">
    <img src={Shoe8} alt="Shoe 8" />
    <h3>Woodland Shoes</h3>
    <p>₹3999</p>
  </div>

</div>

      <Footer />
    </>
  );
}

export default Shoes;