import React, { useState } from 'react'
import ListItem from './ListItem'
import InputItem from './InputItem'

const TodoList = () => {


  const [items,setItems] = useState([])

 

  function addItems(inputText){
     setItems(preValue => ( [ ...preValue, inputText ]))
   
  }

    
  function deletItem(id){
      setItems( preValue => {
        return preValue.filter((item,index) => {
          return index !== id
        })
      })
  }

  console.log("items", items)

  return (
      <>
         <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputItem onadd={addItems} />
      <div>
        <ul>
           {
            items.map((listItem,index) => {
               return (
                  <ListItem 
                  key={index} 
                  id={index} 
                  listItems= {listItem} 
                  onchecked={deletItem} />
               )
             })
           }
        </ul>
      </div>
    </div>
      </>
  )
}

export default TodoList