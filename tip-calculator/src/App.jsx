import GreenBox from "./components/GreenBox"
import ButtonBox from "./components/ButtonBox"
import './App.css'
import Input from "./components/Input"
import { useState } from "react"



function App() {

  const [inputValue, setInputValue] = useState('')

  return (
    <>
      <div className="background">
        <div className="container">
          <GreenBox text="Reset" />
          <ButtonBox />
          <Input setValue={setInputValue} />
          <p>{inputValue}</p>
        </div>
      </div>
    </>
  )
}

export default App
