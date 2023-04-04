import {useState,useCallback} from "react";
import Child from "./Child";


const UseCallbackHook=()=>{
	 const [toggle,setToggle]=useState(false);
	 const [data,setData]=useState("This is sample text");
	 const returnComment=useCallback((name)=>{
	 	return data;
	 },[data]);
	 return (
      <div className="App">
      <Child returnComment={returnComment}/>
      <button onClick={()=>{setToggle(!toggle)}}>TOGGLE</button>
      {toggle && <p>This is text</p>}
      </div>
      );

}
export default UseCallbackHook;