"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation';

const Form = () => {
    const [emailInputValue, setEmailInputValue] = useState('');
    const [isValid, setIsValid] = useState();
    const [errorMsg, setErrorMsg] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    
    const router = useRouter();

    const dataIsInvalid = !isValid && isTouched;

    const changeHanlder = e => {
        setEmailInputValue(e.target.value);
    }
    const submitHandler = (e) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const email = emailInputValue;
        e.preventDefault();
        setIsTouched(true);

        if(emailInputValue.trim() === '') {
            setIsValid(false);
            setErrorMsg('Field cannot be empty');
            return
        }  else if(!emailRegex.test(email)) {
            setIsValid(false);
            setErrorMsg('Invalid e-mail format');
            return
        } else {
            router.push('/success');
        }
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
            </div>
        </form>
    )
}

export default Form