"use client"

import { useState } from "react"
import Image from "next/image";
import List from "./list";
import SubmitButton from "./submitButton";

import styles from './form.module.css'

const Form = ( {setMail, setIsSubmited} ) => {
    const [emailInputValue, setEmailInputValue] = useState('');
    const [isValid, setIsValid] = useState();
    const [errorMsg, setErrorMsg] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const dataIsInvalid = !isValid && isTouched;

    const changeHanlder = e => {
        setEmailInputValue(e.target.value);
        setIsValid(true);
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
            setMail(email)
            setIsSubmited(true)
        }
    }

    return (
        <form method="post" onSubmit={submitHandler} className={styles.form}>
            <div className={styles.mobileImageBox}>
                <Image
                    className={styles.mobileImage}
                    src="/illustration-sign-up-mobile.svg"
                    width={375}
                    height={284}
                    alt="Charts and screens on colorfull background"
                />
            </div>
            <div className={styles.text}>
                <p className={styles.heading}>Stay updated!</p>
                <h1 className={styles.subHeading}>Join 60,000+ product managers reciving monthly updates on:</h1>
                <List/>
                <div className={styles.labelBox}>
                    <label htmlFor="email">
                        Email address
                        <span className={`${styles.errorMsg} ${dataIsInvalid ? styles.isInvalid : ''}`}>{errorMsg}</span>
                    </label>
                </div>
                <input 
                    type="text"
                    placeholder="email@company.com"
                    className={dataIsInvalid ? styles.isInvalid : ''}
                    id="email"
                    value={emailInputValue}
                    onChange={changeHanlder} />                
                <SubmitButton text="Subscribe to monthly newsletter"/>
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