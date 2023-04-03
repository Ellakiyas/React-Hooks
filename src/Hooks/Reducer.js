// import {useState} from "react";

// const UseReducerHook=()=>{
// 	const [count,setCount]=useState(0);
// 	const [text,setText]=useState(true);

// 	let changeValue=()=>{
// 		setCount(count+1);
// 		setText(!text);
// 	}
	
// 	return (
//      <div className="App">
//      <h1>{count}</h1>
//      <button onClick={changeValue}>INCREMENT</button>
//      {text && <p>THIS IS TEXT</p>}
//      </div>
      
//     );
// };

import {useReducer} from "react";

const reducer=(state,action)=>{
	switch (action.type){
		case "INCREMENT":
		   return {count:state.count+1,showText:state.showText};
		case "TOGGLE":
		   return {count:state.count,showText:!state.showText};
		 default:
		    return state;
	}

};

const UseReducerHook=()=>{
	const [state,dispatch]=useReducer(reducer,{count:0,showText:true});

return (
      <div className="App">
      <h1>{state.count}</h1>
      <button onClick={()=>{
      	dispatch({type:"INCREMENT"});
      	dispatch({type:"TOGGLE"});
      }}>CLICK HERE</button>
      {state.showText && <p>THIS IS TEXT</p> }
      </div>
      );
  }




export default UseReducerHook;