import GreenBox from "./components/GreenBox"
import ButtonBox from "./components/ButtonBox"
import './App.css'
import Input from "./components/Input"
import { useState } from "react"



function App() {



    const [billInput, setBillInput] = useState(1)
    const [peopleInput, setNumberOfPeople] = useState(1)
    const [tipPerPerson, setTipPercentage] = useState(0)
    const [totalPerPerson, setTotalPerPerson] = useState(0)
    const [tipAmount, setTipAmount] = useState(0)
    const [resetButton, setResetButton] = useState("")
    
    

  

  return (
    <>
      <div className="background">
        <div className="container">
          <GreenBox text="Reset" />
          <ButtonBox />
          <Input />
        </div>
      </div>
    </>
  )
}

export default App
