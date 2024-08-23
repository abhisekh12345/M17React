import React from "react"
import contactFile from "./components/Day 1- 3/contact"
import Card from "./components/Day4/Card"
import Avatar from "./components/Day4/Avatar"
import Home from "./components/Day6/Home"

function App() {

 const toggleValue = false
  
  // function cutText (){
  //    document.getElementById("root").style.textDecoration = "line-through"
  // }
  // function uncutText (){
  //    document.getElementById("root").style.textDecoration = "none"
  // }




  return (
    <>
       <div className="w-[400px] h-[400px] flex justify-center items-center mx-auto">
          <h1 className={toggleValue ? "decoration-dotted" : 'line-through'}>Buy Milk</h1>
       
          {/* <button  className="border border-red-600 p-3">Cut Text</button>
          <button  className="border border-red-600 p-3">Cut Text</button> */}
       </div>
    </>
  )
}

export default App








