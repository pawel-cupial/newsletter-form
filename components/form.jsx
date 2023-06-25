"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation';
import Image from "next/image";

import List from "./list";
import Button from "./button";

import styles from './form.module.css'

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
        }  else if(!emailRegex.test(email)) {
            setIsValid(false);
            setErrorMsg('Invalid e-mail format');
        } else {
            router.push('/success');
        }
    }

    return (
        <form method="post" onSubmit={submitHandler} className={styles.form}>
            <div className={styles.text}>
                <p className={styles.heading}>Stay updated!</p>
                <p className={styles.subHeading}>Join 60,000+ product managers reciving monthly updates on:</p>
                <List/>
                <div className={styles.labelBox}>
                    <label htmlFor="email">
                        Email address
                        {dataIsInvalid && <p className={styles.errorMsg}>{errorMsg}</p>}
                    </label>
                </div>
                <input 
                    type="text"
                    placeholder="email@company.com"
                    className={dataIsInvalid ? styles.isInvalid : ''}
                    id="email"
                    value={emailInputValue}
                    onChange={changeHanlder} />                
                <Button/>
            </div>
            <div className={styles.imageBox}>
                <Image
                    src="/illustration-sign-up-desktop.svg"
                    width={400}
                    height={593}
                    alt="Charts and screens on colorfull background"
                />
            </div>
        </form>
    )
}

export default Form