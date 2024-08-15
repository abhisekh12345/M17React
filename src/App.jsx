


function App() {

  const name = "Harshit"

  
  const currentHour = 20

  let greeting ;
 
  if( currentHour < 12){
     greeting = "Good Moring"
  }else if(currentHour < 18){
    greeting = "Good Afternoon"
  }else{
    greeting = "Good Night"
  }


  return (
    <>
       <h1 className="heading"  >{greeting}</h1>
       <p>Starting Program in react</p>
    </>
  )
}

export default App



//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
