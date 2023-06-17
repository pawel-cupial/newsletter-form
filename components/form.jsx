"use client"

import { useState } from "react"

const Form = () => {
    const [emailInputValue, setEmailInputValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    
    const dataIsInvalid = !isValid && isTouched
    const dataIsValid = isValid && isTouched

    const changeHanlder = e => {
        setEmailInputValue(e.target.value)
    }
    const submitHandler = (e) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const email = emailInputValue;
        e.preventDefault();
        setIsTouched(true)

        if(emailInputValue.trim() === '') {
            setIsValid(false)
            setErrorMsg('Field cannot be empty');
            return
        }  else if(!emailRegex.test(email)) {
            setIsValid(false)
            setErrorMsg('Invalid e-mail format');
            return
        } else {
            setIsValid(true)
        }

        setIsValid(true)
        setEmailInputValue('')
    }

    return (
        <form method="post" onSubmit={submitHandler}>
            <div>
                <p>Stay updated!</p>
                <p>Join 60,000+ product managers reciving monthly updates on:</p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <label htmlFor="email">
                    Email address
                    <input type="text" placeholder="email@company.com" id="email" value={emailInputValue} onChange={changeHanlder} />
                </label>
                <button type="submit">Subscribe to monthly newsletter</button>
                {dataIsInvalid && <p>{errorMsg}</p>}
                {dataIsValid && <p>your form was successfully submitted</p>}
            </div>
        </form>
    )
}

export default Form