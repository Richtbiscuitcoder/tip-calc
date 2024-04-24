import Button from "../Button"
import CustomButton from "../CustomButton"
import './style.css'

const ButtonBox = () => {
      const button1click = () => {
    console.log('5%')
  }
  const button2click = () => {
    console.log('10%')
  }
  const button3click = () => {
    console.log('15%')
  }
  const button4click = () => {
    console.log('25%')
  } 
  const button5click = () => {
    console.log('50%')
  }
  const button6click = () => {
    console.log('Custom')
  }
    return (
        <div className="tip-percent">
            <p>Bill</p>
            <input type="number" placeholder="$"/>
            <Button text="5%" handleClick={button1click}/>
            <Button text="10%" handleClick={button2click}/>
            <Button text="15%" handleClick={button3click}/> 
            <Button text="25%" handleClick={button4click}/>
            <Button text="50%" handleClick={button5click}/>
            <CustomButton text="Custom" handleClick={button6click}/>
            <p>Number of people</p>
            <input type="number" />
        </div>
    )
}

export default ButtonBox