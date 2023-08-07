"use client";
import { useState } from "react"
import Form from '@/components/form'
import SuccessBox from '@/components/successBox'

export default function Home() {
  const [mail, setMail] = useState('')
  const [isSubmited, setIsSubmited] = useState(false)

  return (
    <main>
      { isSubmited ? <SuccessBox mail={mail} setIsSubmited={setIsSubmited} /> : <Form setMail={setMail} setIsSubmited={setIsSubmited}/> }
    </main>
  )
}