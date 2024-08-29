import React, { useState } from 'react'

const ReactForm = () => {
   
    const[fullName,setFullName] = useState({
      fName : "",
      lName : "",
      email : "",
    })

   

   

 
      
    function handleChange(event){
          // const newValue = event.target.value
          // const inputName = event.target.name

          const {name,value} = event.target
            
         setFullName( preValue => {
            return{
               ...preValue,
               [name] : value
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
           <p className='text-sm'>{fullName.email}</p>
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
            <input 
            name='email'
            onChange={handleChange}
            type='email'
            placeholder='email'
            value = {fullName.email}
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