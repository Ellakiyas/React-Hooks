import axios from "axios";
import {useState,useEffect,useMemo} from "react";

const UseMemoHook=()=>{
	const [data,setData]=useState(null);
	const [toggle,setToggle]=useState(false);

	useEffect(()=>{
		axios
		.get("https://jsonplaceholder.typicode.com/comments")
		.then((response)=>{
		   setData(response.data);
		});
	},[]);

	const findlongestName=(comments)=>{
		if(!comments) return null;

		let longestName="";
		for(let i=0;i<comments.length;i++){
			let currentName=comments[i].name;
			if(currentName.length>longestName.length){
				longestName=currentName;
			}
		}
		console.log("This was computed");
		return longestName;
	}

	const getLongestName=useMemo(()=>findlongestName(data),[data]);

	return (
      <div className="App">
      <p>{getLongestName}</p>
      <button onClick={()=>{setToggle(!toggle)}}>TOGGLE</button>
      {toggle && <p>This is toogle text</p>}
      </div>
      );

}
export default UseMemoHook;