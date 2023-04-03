import {useState} from "react";

// const UseState=()=>{
//   //Incrementing the value
//   const [result,setResult]=useState(0);
//   const incrementValue=()=>{
//     setResult(result+1);
//   }
//   return (
//     <div className="App">
//       <p>{result}</p>
//       <button onClick={incrementValue}>INCREMENT</button>
//     </div>
//   );
// };

const UseStateHook=()=>{
	const [inputValue,setInput]=useState("");
	let onChangeInput=(e)=>{
		setInput(e.target.value);
	}
	return (
     <div className="App">
     <input type="text" onChange={onChangeInput} placeholder="Enter Something.."/>
     <p>{inputValue}</p>
     </div>
      
    );
};

export default UseStateHook;