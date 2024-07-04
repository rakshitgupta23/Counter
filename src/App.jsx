import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter]=useState(0);
  const Increase=()=>{
    setCounter(counter+1)
  }
  const Decrease=()=>{
    if(counter>0)
    setCounter(counter-1)
    else
    alert("Counter is already 0")
  }
  return (
    <>
      <h1>Here is the value of Counter</h1>
      <h2>{counter}</h2>
      <button onClick={Increase}>Increase</button>{" "}
      <button onClick={Decrease}>Decrease</button>
    </>
  )
}

export default App
