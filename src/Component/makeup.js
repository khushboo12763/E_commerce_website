import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Style/makeup.css";

import Makeup1 from "../assets/makeup pic/makeup1.webp";
import Makeup2 from "../assets/makeup pic/makeup2.webp";
import Makeup3 from "../assets/makeup pic/makeup3.webp";
import Makeup4 from "../assets/makeup pic/makeup4.webp";
import Makeup5 from "../assets/makeup pic/makeup5.webp";
import Makeup6 from "../assets/makeup pic/makeup6.webp";
import Makeup7 from "../assets/makeup pic/makeup7.webp";
import Makeup8 from "../assets/makeup pic/makeup8.webp";

function Makeup() {
  return (
    <>
      <Header />

      <div className="products">
        <div className="card">
          <img src={Makeup1} alt="Makeup 1" />
          <h3>Lipstick</h3>
          <p>₹499</p>
        </div>

        <div className="card">
          <img src={Makeup2} alt="Makeup 2" />
          <h3>Foundation</h3>
          <p>₹799</p>
        </div>

        <div className="card">
          <img src={Makeup3} alt="Makeup 3" />
          <h3>Compact Powder</h3>
          <p>₹599</p>
        </div>

        <div className="card">
          <img src={Makeup4} alt="Makeup 4" />
          <h3>Mascara</h3>
          <p>₹699</p>
        </div>

        <div className="card">
          <img src={Makeup5} alt="Makeup 5" />
          <h3>Eyeliner</h3>
          <p>₹299</p>
        </div>

        <div className="card">
          <img src={Makeup6} alt="Makeup 6" />
          <h3>Blush</h3>
          <p>₹549</p>
        </div>

        <div className="card">
          <img src={Makeup7} alt="Makeup 7" />
          <h3>Concealer</h3>
          <p>₹649</p>
        </div>

        <div className="card">
          <img src={Makeup8} alt="Makeup 8" />
          <h3>Makeup Kit</h3>
          <p>₹1499</p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Makeup;