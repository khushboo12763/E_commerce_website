import React from "react";

function Login(){
    return(<>
    <div
    style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        background:"#f4f4f4",
    }}>
        <div
        style={{
            background:"White",
            padding:"30px",
            borderRadius:"30px",
            boxShadow:"0 0 10px rgba(0,0,0,0.2)",
            width:"300px",
            textAlign:"center"
        }}>
       
    
        <h1>Login</h1>
        <input type="text"placeholder="User ID"
        style={{
            width:"90%",
            padding:"10px",
            margin:"10px",
            borderRadius:"5px",
            border:"1px solid #cc"
        }}
        ></input><br/>
        <input type="password" placeholder="Password"
        style={{
            width:"90%",
            padding:"10px",
            margin:"10px",
            borderRadius:"5px",
            border:"1px solid #cc"
        }}
        ></input><br/>

        <button style={{
            width:"100%",
            padding:"10px",
            margin:"15px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
        }}>Login</button>
    
         
        </div>
    </div>
    
    </>)
}
export default Login;