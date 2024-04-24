import GreenBox from "./components/GreenBox"
import ButtonBox from "./components/ButtonBox"
import './App.css'



function App() {


  return (
    <>
      <div className="background">
        <div className="container">
          <GreenBox text="Reset" />
          <ButtonBox />
        </div>
      </div>
    </>
  )
}

export default App
