import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Click from './assets/components/button'
import Count from './assets/components/count'
import Click2 from './assets/components/button2'
import Count2 from './assets/components/count2'

function App() {
  const [count, setCount] = useState(9) 
  const [count2, setCount2] = useState(7)
  const incre= () => setCount((count) => count + 1)
  const decre= () => setCount2((count2) => count2 - 1)
  return (
    <>
    <Click plusOne={incre}/>
    <Click2 minusOne={decre}/>
    <Count value={count}/>
    <Count2 value2={count2}/>
    </>
  ) 
}

export default App
