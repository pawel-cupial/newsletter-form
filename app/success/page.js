'use client'
import { useRouter } from 'next/navigation';

import styles from '../../components/button.module.css'

const Success = () => {
    const router = useRouter();
    const clickHandler = () => {
        router.push('/');
    }
    
    return (
        <div>
            <p>Thanks for subscribing!</p>
            <p>A confirmation email has been sent to EMAIL. Please open in and click the button inside to confirm your subscription</p>
            <button type="button" className={styles.button} onClick={clickHandler}><span>Dismiss message</span></button>
        </div>
    )
}

export default Success