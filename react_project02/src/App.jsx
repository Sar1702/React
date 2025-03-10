import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-5 ' >hello </h1>
      <Card username = "hitesh "/>
      <Card/>
    </>
  )
}

export default App
