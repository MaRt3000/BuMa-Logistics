import { useState } from 'react'
import HeroSection from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HeroSection/>
    </>
  )
}

export default App
