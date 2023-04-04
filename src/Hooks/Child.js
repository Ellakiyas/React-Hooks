import {useEffect} from "react";

const Child=({returnComment})=>{
	useEffect(()=>{
		console.log("Function excecuted");
	},[returnComment]);
	return (
      <div className="App">
      <p>{returnComment("Ellakiya")}</p>
      </div>
      );
}
export default Child;