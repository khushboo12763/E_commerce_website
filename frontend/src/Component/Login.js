import React from "react";
import "./Style/Login.css";

function Login() {
  return (
    <div className="login">
    <div className="login-box">
    <h1 className="heading">Login</h1>

    <input type="text"placeholder="E-mail"className="input"/>

    <input type="password"placeholder="Password"className="input"/>

    <button className="button">Login</button>
      </div>
    </div>
  );
}

export default Login;