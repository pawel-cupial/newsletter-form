"use client";
import { useState } from "react"
import Form from '@/components/form'
import SuccessBox from '@/components/successBox'

// TODO: Zamiana na useContext

export default function Home() {
  const [mail, setMail] = useState('')
  const [isSubmited, setIsSubmited] = useState(false)

  return (
    <main>
      { isSubmited ? <SuccessBox setMail={setMail} setIsSubmited={setIsSubmited} mail={mail} isSubmited={isSubmited}/> : <Form setMail={setMail} setIsSubmited={setIsSubmited}/> }
    </main>
  )
}
