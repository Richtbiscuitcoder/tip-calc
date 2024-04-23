import './style.css'

const Button = ({text, handleClick}) => {
    
    return (
        <button onClick={handleClick} className='custom-button'>{text}</button>
    )
}

export default Button