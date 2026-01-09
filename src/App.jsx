import React, { useState } from 'react'
import Parent from '../components/Tablr'

const App = () => {
  const [count, setCount] = useState(0)
  const [countdec, setCountdec] = useState(0)
  console.log("App");
   const inc =()=> {
        setCount((prev)=> prev + 1)
    }
    const dec =()=> {
        setCount((prev)=> prev - 1)
    }
  return (
    <div>
      <h1>App : {count} </h1>
      <Parent count ={count} />
      <button onClick={inc} >+</button>
      <button onClick={dec} >-</button>
    </div>
  )
}

export default App
