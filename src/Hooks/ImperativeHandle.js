import {useRef} from "react";
import Button from "./Button";

const ImperativeHandleHook=()=>{

	const buttonRef=useRef(null);

	return (
      <div className="App">
      <button onClick={()=>{buttonRef.current.alterToggle()}}>Button from parent</button>
      <Button ref={buttonRef}/>
      </div>
      );
}
export default ImperativeHandleHook;