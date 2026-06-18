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
        <Link to="/Shoes" className="navbar">SHOES</Link>
        <Link to="/Beauty" className="navbar">Beauty</Link>
        <Link to="/Skincare" className="navbar">MAKEUP</Link>
 
 
        <div className="search-box">
          <CiSearch className="search-icon" />
          <input type="text" placeholder="Search for products, brands and more" className="input" />
        </div>

        <Link to="/signup">
        <CgProfile className="icons" />
        </Link>

        <Link to="/login">
        <IoLogIn className="icons" />
        </Link>
        
        <FaCartArrowDown className="icons"/>  
      </div>
    </>
  );
}

export default Header;