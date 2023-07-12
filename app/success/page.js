'use client'
import { useRouter } from 'next/navigation';

import BackToHomeButton from '@/components/backToHomeButton';

const Success = () => {    
    return (
        <div>
            <p>Thanks for subscribing!</p>
            <p>A confirmation email has been sent to EMAIL. Please open in and click the button inside to confirm your subscription</p>
            <BackToHomeButton text="Dismiss message"/>
        </div>
    )
}

export default Success