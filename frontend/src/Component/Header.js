import React from "react";
import "./Style/Header.css";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoLogIn } from "react-icons/io5"; 
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="head">
        <Link to="/" className="navbar">Home</Link>
        <Link to="/women" className="navbar">WOMEN</Link>
        <p className="navbar">MEN</p>
        <p className="navbar">KIDS</p>
        <p className="navbar">BEAUTY</p>
        <p className="navbar">GENZ</p>
        
        

        <div className="search-box">
          <CiSearch className="search-icon" />
          <input type="text" placeholder="Search for products, brands and more" className="input" />
        </div>
        <CgProfile className="icons"/>
        <IoLogIn className="icons"/>  
        <FaCartArrowDown className="icons"/>  
      </div>
    </>
  );
}

export default Header;