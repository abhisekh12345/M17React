import React,{useState} from 'react'

const InputItem = ({onadd}) => {

    const [inputText, setInputText] = useState("")

    function handleChange (event) {
        const newValue = event.target.value
        setInputText(newValue)
    }

    

  return (
      <>
        <div className="form">
        <input 
          onChange={handleChange}
          type="text"
          value={inputText}
           />
        <button
         onClick={() => {
            onadd(inputText)
            setInputText("")
         }}
        >
          <span>Add</span>
        </button>
      </div>

      </>
  )
}

export default InputItem