"use client"

import { useState } from "react"

const Form = () => {
    const [emailInputValue, setEmailInputValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isTouched, setIsTouched] = useState(false);
    
    const isInvalid = !isValid && isTouched

    const changeHanlder = e => {
        setEmailInputValue(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setIsTouched(true)

        if(emailInputValue.trim() === '') {
            setIsValid(false)
            return
        }

        setIsValid(true)
        console.log(emailInputValue);
        setEmailInputValue('')
    }

    return (
        <form method="post" onSubmit={submitHandler}>
            <p>JO JE FORMULORZ</p>
            <label htmlFor="email">
                Email address
                <input type="text" placeholder="Enter your e-mail" id="email" value={emailInputValue} onChange={changeHanlder} />
            </label>
            <button type="submit">Jo je knefel</button>
            {isInvalid && <p>Field cannot be empty</p>}
        </form>
    )
}

export default Form