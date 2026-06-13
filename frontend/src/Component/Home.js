import React from "react";
import "./Style/Home.css";
import HomePic from "../assets/home pic.png";
import Top1 from "../assets/pic1.webp";
import Top2 from "../assets/pic2.webp";
import Top3 from "../assets/pic3.webp";
import Top4 from "../assets/pic4.webp";
import Header from "./Header";
import Footer from "./Footer";


function Home() {
  return (
    <>
    <Header/>
      <img src={HomePic} className="pic" />

      <div className="products">
      <div className="card">
        <img src={Top1} alt="Top" />
        <h3>Nuon Navy Ribbed Top</h3>
        <p>₹399</p>
      </div>

      <div className="card">
        <img src={Top2} alt="Top" />
        <h3>Nuon Dusty Pink Top</h3>
        <p>₹399</p>
      </div>

      <div className="card">
        <img src={Top3} alt="Top" />
        <h3>Wardrobe Leopard Top</h3>
        <p>₹1299</p>
      </div>

      <div className="card">
        <img src={Top4} alt="Top" />
        <h3>Wardrobe Sleeveless Top</h3>
        <p>₹999</p>
      </div>
    </div>

    <Footer/>
    </>
  );
}

export default Home;