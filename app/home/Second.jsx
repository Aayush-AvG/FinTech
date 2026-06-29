import React from 'react'
import ScrollStack, { ScrollStackItem } from '../hooks/stackCard'

const Second = () => {
  return (
    <div className="fade-section"> {/* ← removed h-screen, it was clipping everything */}
       <h1 className='text-4xl text-white absolute justify-center z-4'>Finova</h1>
      <ScrollStack useWindowScroll={true}> {/* ← this is the key prop */}
        <ScrollStackItem itemClassName="bg-red-300 text-white">
          <h2>Card 1</h2>
          <p>This is the first card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-amber-300 text-white">
          <h2>Card 2</h2>
          <p>This is the second card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-blue-300 text-white">
          <h2>Card 3</h2>
          <p>This is the third card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-blue-300 text-white">
          <h2>Card 3</h2>
          <p>This is the third card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-blue-300 text-white">
          <h2>Card 3</h2>
          <p>This is the third card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-blue-300 text-white">
          <h2>Card 3</h2>
          <p>This is the third card in the stack</p>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  )
}

export default Second