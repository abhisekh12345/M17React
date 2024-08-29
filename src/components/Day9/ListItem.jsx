import React from 'react'

const ListItem = ({listItems,id,onchecked}) => {
  

   

  return (
      <>
         <div onClick={() => {
           onchecked(id)
         }}>
           <li>{listItems}</li>
         </div>
      </>
  )
}

export default ListItem