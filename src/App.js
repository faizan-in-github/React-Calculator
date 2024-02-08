import React ,{ useState } from 'react';
import "./app.css"

function App() {
  const [input,setinput]= useState("")
  function evaluater(stri) {
    if (stri === "AC") {
      setinput("");
    } else if (stri === "=") {
      try {
        setinput(eval(input));
      } catch (error) {
        setinput("Error");
      }
    } 
    else if (stri === "C") {
      try {
        var myString = input.slice(0, -1);
        setinput(myString);
      } catch (error) {
        setinput("Error");
      }
    } else {
      setinput(input + stri);
    }
  }
  return (
    <div className="container">
        <div className="calculator">
            <div className="answers">
              <h1>{input}</h1>
            </div>
            <button className="big" onClick={()=>{evaluater("AC")}}>AC</button>
            <button className="big"onClick={()=>{evaluater("C")}}>C</button>
            <button onClick={()=>{evaluater("+")}}>+</button>
            <button onClick={()=>{evaluater("1")}}>1</button>
            <button onClick={()=>{evaluater("2")}}>2</button>
            <button onClick={()=>{evaluater("3")}}>3</button>
            <button className="big" onClick={()=>{evaluater("-")}}>--</button>
            <button onClick={()=>{evaluater("4")}}>4</button>
            <button onClick={()=>{evaluater("5")}}>5</button>
            <button onClick={()=>{evaluater("6")}}>6</button>
            <button className="big" onClick={()=>{evaluater("*")}}>x</button>
            <button onClick={()=>{evaluater("7")}}>7</button>
            <button onClick={()=>{evaluater("8")}}>8</button>
            <button onClick={()=>{evaluater("9")}}>9</button>
            <button className="big" onClick={()=>{evaluater("/")}}>÷</button>
            <button className="bigaf" onClick={()=>{evaluater("=")}}>=</button>

        </div>
    </div>
  );
}

export default App;
