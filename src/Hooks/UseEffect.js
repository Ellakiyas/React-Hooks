import {useEffect,useState} from "react";
import axios from "axios";

const UseEffectHook=()=>{
	const [data,setData]=useState("");

	useEffect(()=>{
		axios
		.get("https://jsonplaceholder.typicode.com/comments")
		.then((response)=>{
             setData(response.data[0].email);
             console.log("API WAS CALLED");
		});
	},[]);

	return (
      <div className="App">
      <p>Hello</p>
      <p>{data}</p>
      </div>
      );
}
export default UseEffectHook;