import styles from './backToHomeButton.module.css'

const BackToHomeButton = (props) => {
    const clickHandler = () => {
        props.setIsSubmited(false)
    }

    return (
        <button type="button" className={styles.button} onClick={clickHandler}>
            <span>{props.text}</span>
        </button>
    )
}

export default BackToHomeButton