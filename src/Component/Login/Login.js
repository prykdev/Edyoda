import React from "react";
import "./Login.css";
export const Login = ({login}) => {
  return (
    <>
    
      <div className="formWrapper">
        <h1 className="heading">Login</h1>
        <form className="form" onSubmit={ev=>{
          ev.preventDefault();
          //Add conditions 
          login()

        }} >
          <input type="text" placeholder="Username" value="" />
          <input type="password" placeholder="Password" value="" />
          <input className="button" type="submit" value="Login" />

        </form>
      </div>
    </>
  );
};
