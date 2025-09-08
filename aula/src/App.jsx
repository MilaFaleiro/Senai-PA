import { useState } from 'react'
import './App.css'
import InfoCliente from './components/InfoCliente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <InfoCliente />
    </>
  )
}

export default App
