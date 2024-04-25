import GreenBox from "./components/GreenBox"
import ButtonBox from "./components/ButtonBox"
import './App.css'
import Input from "./components/Input"
import { useState } from "react"



function App() {



    const [billAmount, setBillAmount] = useState(1)

    const [numOfPeople, setNumberOfPeople] = useState(1)

    const [tipPercentage, setTipPercentage] = useState(0)

    const [tipAmount, setTipAmount] = useState(0)
    const [perPerson, setPerPerson] = useState(0)

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
