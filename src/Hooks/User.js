import React from "react";
import {useContext} from "react";
import {AppContext} from "./UseContext";

const User=()=>{
    const {username}=useContext(AppContext);
	return (
      <div className="App">
      <h1>User:{username}</h1>
      </div>
      );
  }
  export default User;