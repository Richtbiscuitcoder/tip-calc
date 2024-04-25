const Input = ({setValue, text}) => {


    const handleChange = (e) => {
        
        console.log(e.target.value)
    }

    return (
        <>
            <label>{text}</label>
            <input type="number" onChange={handleChange} />
        </>
    )

}

export default Input