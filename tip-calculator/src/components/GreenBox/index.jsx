import "./style.css"

const GreenBox = ({text}) => {
    return (
        <div className="green-box">
            <p>Tip Amount</p>
            <p>/ person</p>
            <input />
            <p>Total</p>
            <p>/ person</p>
            <input />
            <button className="green-button" text="Reset">{text}</button>
        </div>

    )
}

export default GreenBox