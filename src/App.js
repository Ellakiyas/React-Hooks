
import './App.css';
import {useState} from "react";
import UseStateHook from "./Hooks/UseState";
import UseReducerHook from "./Hooks/Reducer";
import UseEffectHook from "./Hooks/UseEffect";
import UseRefHook from "./Hooks/UseRef";
import UseLayoutEffectHook from "./Hooks/UseLayoutEffect";
import ImpertiaveHandleHook from "./Hooks/ImperativeHandle";
import UseContextHook from "./Hooks/UseContext";
import UseMemoHook from "./Hooks/UseMemo";
import UseCallbackHook from "./Hooks/UseCallback";

function App() {
  return (
    <div className="App">
      <UseCallbackHook/>
    </div>
  );
}

export default App;
