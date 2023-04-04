import {createContext,useState} from "react";
import Login from "./Login";
import User from "./User";


export const AppContext=createContext(null);

const UseContectHook=()=>{
	const [username,setUsername]=useState("");
	return (
      <div className="App">
      <AppContext.Provider value={{username,setUsername}}>
      <Login/>
      <User/>
      </AppContext.Provider>
      </div>
      );
}

export default UseContectHook;