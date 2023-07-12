import styles from './submitButton.module.css'

const SubmitButton = (props) => {
    return (
        <button type="submit" className={styles.button}>
            <span>{props.text}</span>
        </button>
    )
}

export default SubmitButton