const Input = ({text}) => {


    const handleChange = (e) => {
        
        console.log(input.target.value)
    }

    return (
        <>
            <label>
                <input type="number" onChange={handleChange} text="Bill" />
            </label>
            
        </>
    )

}

export default Input