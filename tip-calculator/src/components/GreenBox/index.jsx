import Input from "../Input"
import "./style.css"

const GreenBox = ({text}) => {



    
    return (
        <div className="green-box">
            <p>Tip Amount</p>
            <p>/ person</p>
            <Input id="tip-amount"/>
            <p>Total</p>
            <p>/ person</p>
            <Input id="total"/>
            <button className="green-button" text="Reset">{text}</button>
        </div>

    )
}

export default GreenBox