import React from "react"
import contactFile from "./components/Day 1- 3/contact"
import Card from "./components/Day4/Card"
import Avatar from "./components/Day4/Avatar"

function App() {
  
//   const createCard = (item) =>{
//     return(
//      <Card 
//      key = {item.id}
//      name = {item.name}
//      imgUrl = {item.imgUrl}
//      phone = {item.phone}
//      email = {item.email}
//     />
//     )
//  }


  return (
    <>
     <h1 className="text-3xl font-bold mb-9">My Contact</h1>
      
     {
      contactFile.map((item) => {
        return(
          <Card 
           key = {item.id}
           name = {item.name}
           imgUrl = {item.imgUrl}
           phone = {item.phone}
           email = {item.email}
          />
        )
      })
     }




  

  
    </>
  )
}

export default App





//Import the add, multiply, subtract and divide functions
//from the calculator.jsx file.




