import { useRouter } from 'next/navigation'
import styles from './backToHomeButton.module.css'

const BackToHomeButton = (props) => {
    const router = useRouter()
    const clickHandler = () => {
        router.push('/')
    }

    return (
        <button type="button" className={styles.button} onClick={clickHandler}>
            <span>{props.text}</span>
        </button>
    )
}

export default BackToHomeButton