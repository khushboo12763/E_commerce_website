import React from "react";
import "./Style/Signup.css"

function Signup(){
    return(<>
    <div className="signup">
    <div className="sign box">

    <h1 className="heading">Signup</h1>
    <input type="text" placeholder="Full Name" className="input"></input><br/>
    <input type="text" placeholder="Contact no." className="input"></input><br/>
    <input type="text"placeholder="E-mail" className="input"></input><br/>
    <input type="text" placeholder="password"  className="input"></input><br/>
    <input type="text" placeholder="confirm password"  className="input"></input><br/>
    
    <button className="button">Signup</button>
    </div>
    </div>
    </>)
}
export default Signup;