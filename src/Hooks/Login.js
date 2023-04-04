
import React from "react";
import {useContext} from "react";
import {AppContext} from "./UseContext";

const Login=()=>{
    const {setUsername}=useContext(AppContext);
	return (
      <div className="App">
      <input type="text" onChange={(e)=>{
      	setUsername(e.target.value);
      }}/>
      </div>
      );
}
export default Login;