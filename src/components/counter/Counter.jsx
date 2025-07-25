import React, { useState } from 'react'

const Counter = () => {
const [increase, setIncrease] = useState(0);
const [decrease,setDecrease] = useState(0);   

// Function to handle the increase button 

const handleIncrease = () => {
    setIncrease(increase + 1);

}

const handleDecrease = () => {
    setDecrease(decrease - 1);
}

  return (
    <>
    <div>
      <h1>{increase}</h1>
        <button onClick={handleIncrease}>Increase</button> 
    </div> 

    <div>
      <h1>{decrease}</h1>
        <button onClick={handleDecrease}>decrease</button> 
    </div> 
    </>

 
     


  )
}



export default Counter;
