import React, { useState } from "react";



const Button = () => {
    const [value, setValue] = useState(0);
    const checkButton = () => {
        setValue(value+1);
        
        console.log(`You clicked Button ${value} times`)
    }
    return (
        <>
            <div>
                <button onClick={checkButton}>Click Me</button>
            </div>
        </>
    )
}

export default Button


