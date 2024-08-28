import React, { useState } from 'react'

const ReactForm = () => {
   
    const[fullName,setFullName] = useState({
      fName : "",
      lName : "",
    })
 
      
    function handleChange(event){
          const newValue = event.target.value
          const inputName = event.target.name
            
         setFullName( preValue => {
              if(inputName === 'fName'){
                return {
                    fName : newValue,
                    lName : preValue.lName
                }
              }else if(inputName === "lName"){
                return {
                    fName : preValue.fName,
                    lName : newValue
                }
              }
         })

        }

    // function handleFirstName(event){
    //     setFName(event.target.value)
    // }

    // function handleLastName(event){
    //     setLName(event.target.value)
    // }

    function handleSubmit(event){
        event.preventDefault()
    }

  return (
    <>
       <div className='w-[400px] h-[400]px mx-auto mt-20'>
           <h1 className='text-2xl'>Hello {fullName.fName} {fullName.lName} </h1>
           <form onSubmit={handleSubmit}>
            <input 
            name = "fName"
            onChange={handleChange}
            type='text'
            placeholder='Username'
            value={fullName.fName}
            className='p-4 bg-gray-50 text-center border-4 rounded-lg border-black text-black'
            />
            <br></br>
            <input 
            name='lName'
            onChange={handleChange}
            type='text'
            placeholder='Lastname'
            value = {fullName.lName}
            className='p-4 bg-gray-50 text-center mt-4 border-4 rounded-lg border-black text-black'
            />
            <br></br>
           <button
           type='submit'
           className='border border-gray-100 p-3 w-[150px] mt-3 text-gray-400 font-bold'
            style={{backgroundColor : "white"}}
           >Submit </button>
           </form>

       </div>
    </>
 
  )
}

export default ReactForm