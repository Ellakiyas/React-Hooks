import {createContext,useState} from "react";
import Login from "./Login";
import User from "./User";

const UseContectHook=()=>{
	const [username,setUsername]=useState("");
	return (
      <div className="App">
      <Login setUsername={setUsername}/>
      <User username={username}/>
      </div>
      );
}

export default UseContectHook;