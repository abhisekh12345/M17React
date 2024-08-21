import React from "react"
import Cards from "./components/Cards"
import contactFile from "./components/contact"

function App() {

  return (
    <>
     <h1 className="text-3xl font-bold mb-9">My Contact</h1>
     <Cards 
     name = {contactFile[0].name}
     imgUrl = {contactFile[0].imgUrl}
     phone = {contactFile[0].phone}
     email = {contactFile[0].email}
      />

     <Cards
      name = {contactFile[1].name}
      imgUrl={contactFile[1].imgUrl}
      phone={contactFile[1].phone}
      email={contactFile[1].email}
      /> 


     <Cards
      name = {contactFile[2].name}
      imgUrl={contactFile[2].imgUrl}
      phone={contactFile[2].phone}
      email={contactFile[2].email}
      /> 




  

  
    </>
  )
}

export default App





//Import the add, multiply, subtract and divide functions
//from the calculator.jsx file.




