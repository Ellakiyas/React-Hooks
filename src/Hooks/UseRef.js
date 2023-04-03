import {useRef,useState} from "react";

const UseRefHook=()=>{
	const inputRef=useRef(null);
	const [text,setText]=useState("");

	const onclick=()=>{
		inputRef.current.focus();
		setText(inputRef.current.value);
	}


	return (
      <div className="App">
      <input type="text" placeholder="Enter name" ref={inputRef}/>
      <button onClick={onclick}>CLICK HERE</button>
      <p>THe ENTERED NAME IS:{text}</p>
      </div>
      );
}

export default UseRefHook;