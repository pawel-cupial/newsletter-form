import Image from "next/image";

import styles from './successBox.module.css'

import BackToHomeButton from '@/components/backToHomeButton';

const SuccessBox = () => {
    return (
        <div className={styles.successBox}>
            <div>
                <Image
                    src="/icon-success.svg"
                    width={64}
                    height={64}
                    alt="White check on a gradient background"/>
                <p className={styles.heading}>Thanks for subscribing!</p>
                <p className={styles.text}>A confirmation email has been sent to EMAIL. Please open in and click the button inside to confirm your subscription</p>
            </div>
            <BackToHomeButton text="Dismiss message"/>            
        </div>
    )
}

export default SuccessBox