const Input = ({setValue}) => {


    const handleChange = (e) => {
        
        console.log(e.target.value)
    }

    return (
        <input type="number" onChange={handleChange} />
    )

}

export default Input