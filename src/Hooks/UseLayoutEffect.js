import {useLayoutEffect,useEffect,useRef} from "react";

// const UseLayoutEffectHook=()=>{
// 	useEffect(()=>{
// 		console.log("use effect hook")
// 	},[]);
	
// 	useLayoutEffect(()=>{
// 		console.log("Use layout effect Hook");
// 	},[]);
// }

const UseLayoutEffectHook=()=>{
	const inputRef=useRef(null);

	useLayoutEffect(()=>{
		console.log(inputRef.current.value);
	},[]);
	useEffect(()=>{
	  inputRef.current.value="Hello";
	},[]);

	return (
      <div className="App">
      <input type="text" ref={inputRef} value="Ellakiya"/>
      </div>
      );
}
export default UseLayoutEffectHook;