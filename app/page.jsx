'use client'
import React, { useRef, useEffect } from 'react'
import Third from './home/Third'
import Footer from './home/Footer'
import First from './home/First'
import Second from './home/Second'
import { useFadeOnScroll } from "./hooks/gsapPage"
import AirContainer from './models/AirContainer'

const App = () => {
  const gsapReady = useRef(false)

  useEffect(() => {
    // Signal that all components are mounted
    gsapReady.current = true
  }, [])

  useFadeOnScroll(".fade-section", gsapReady)

  return (
    <>
      <AirContainer />
      <div id="scroll-container" className="relative overflow-x-hidden bg-zinc-800">
        <First />
        <Second />
        <Third />
        <Footer />
      </div>
    </>
  )
}

export default App