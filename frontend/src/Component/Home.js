import React from "react";
import "./Style/Home.css";
import HomePic from "../assets/home pic.png";
import Header from "./Header";
import Footer from "./Footer";


function Home() {
  return (
    <>
    <Header/>
      <img src={HomePic} alt="Home Banner" />
      <Footer/>
    </>
  );
}

export default Home;