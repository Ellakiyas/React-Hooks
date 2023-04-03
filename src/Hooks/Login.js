
import React from "react";
const Login=({setUsername})=>{
	return (
      <div className="App">
      <input type="text" onChange={(e)=>{
      	setUsername(e.target.value);
      }}/>
      </div>
      );
}
export default Login;