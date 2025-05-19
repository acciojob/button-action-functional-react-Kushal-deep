import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  const [display,setDisplay]=useState(false)

  const change=()=>{
    setDisplay(true)
    
  }
  return (
    <div id="main">
    

      

      {display &&(
      <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)
    }

    <button onClick={change}>click me</button>

    </div>
  );
}


export default App;
