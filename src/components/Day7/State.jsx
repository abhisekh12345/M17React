import React, { useState } from 'react'

const State = () => {
 
   

    //react useState 

    // const [count,setCount] = useState(32)

    // function increase (){
    //     setCount(count + 1)
    // }

    // function decrease(){
    //     setCount(count - 1)
    // }

    const [headingText,setHeadingText] = useState('Hi Hello')
    const [isMouseOver, setMouseOver] = useState(false)

    function changeText() {
        setHeadingText("Form Submited")
    }

    function handleMouseOver(){
         setMouseOver(true)
    }

    function handleMouseOut(){
        setMouseOver(false)
    }

  return (
     <>
       <div className='w-[400px] h-[400]px mx-auto mt-20'>
           <h1 className='text-2xl'>{headingText}</h1>
            <p className='border border-gray-100 p-3 w-[150px]'>Username</p>
           <button
            onClick={changeText} 
           className='border border-gray-100 p-3 w-[150px] mt-3 text-gray-400 font-bold'
            style={{backgroundColor :  isMouseOver ? "black" : "white"}}
            onMouseOver={handleMouseOver}
            onMouseOut = {handleMouseOut}
           >Submit </button>

       </div>
     </>
  )
}

export default State