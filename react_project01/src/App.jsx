import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setcounter]=  useState (0)
  //let counter = 0
  const addvalue  = () => {
    
    setcounter(counter + 1)




  }

  const removevalue = ()=> {
    setcounter(counter - 1)

  }

  return (
    <>
      <h1>react {counter}</h1>
      <h2>counter:{counter}</h2>
      <button
      onClick={addvalue}
      >Add Value</button>{" "}
      <button
      onClick={removevalue}
      >remove value </button>
      <p>footer :</p>

    </>
  )
}

export default App
