import React, { useState } from 'react'

export default function Cart() {

  //2
  const [count, setCount] = useState(0);

  //4
  const handleIncrement = () => {
    setCount(count + 1);
  }

  //5
  const handleDecrement = () => {
    setCount(count -1 );
  }
  return <>

{/* 1 */}
  <div className='container py-5'>
      <h2>Cart</h2>

      <div className='container'>
        {/* 3 */}
        <p> {count}</p>
        <br/>
        <button onClick={handleIncrement} className='m-3'>Increment</button>
        <button onClick={handleDecrement}   className='m-3'>Decrement</button>
      </div>

  </div>
  
  
  </>
}
