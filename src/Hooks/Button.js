import {useState,forwardRef,useImperativeHandle} from "react";

const Button=forwardRef((props,ref)=>{
	const [toggle,setToggle]=useState(false);

    useImperativeHandle(ref,()=>({
    	alterToggle(){
    		setToggle(!toggle);
    	}
    }));
	return (
      <div className="App">
      <button>Button from Child</button>
      {toggle && <p>Toggle</p>}
      </div>
      );
});
export default Button;