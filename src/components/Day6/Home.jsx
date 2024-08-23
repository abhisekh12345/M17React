import React from 'react'
import Login from './Login';

const Home = () => {

    var isRegister = false;
    


  return (
     <div>
      <Login isRegister={isRegister} />
     </div>
  )
}

export default Home