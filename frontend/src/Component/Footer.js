import React from "react";
import "./Style/Footer.css";

function Footer(){
    return(<>
    <div className="footer">
        <div className="column">
        <h3>Product</h3>
        <p>Website Builder</p>
        <p>AI Website Builder</p>
        <p>Website Templates</p>
        <p>Website Design</p>
        <p>Web Hosting</p>
        </div>
        
        <div className="column">
        <h3>Solutions</h3>
        <p>Business Website</p>
        <p>Online Store Builder</p>
        <p>eCommerce Website</p>
        <p>Portfolio Website</p>
        <p>Blog Website</p>
      </div>

      <div className="column">
        <h3>Resources</h3>
        <p>Wix Blog</p>
        <p>Privacy and Security Hub</p>
        <p>SEO Learning Hub</p>
        <p>App Market</p>
      </div>

      

      


    </div>
    </>)
}
export default Footer