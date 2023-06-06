"use client"

import Button from '@/components/button'
import EmailInput from '@/components/emailInput'

const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        console.log(formData)
        const formJson = Object.fromEntries(formData.entries());
        localStorage.setItem("email", formJson.email);
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <p>JO JE FORMULORZ</p>
            <EmailInput />
            <Button />
        </form>
    )
}

export default Form