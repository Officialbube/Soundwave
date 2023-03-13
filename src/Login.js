import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";

function Login(){
  return (
    <div className="login">
      <img src="/" alt=""/>
      <a href={accessUrl}>LOGIN TO SPOTIFY </a>
    </div>
  );
}

export default Login;