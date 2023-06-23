import styles from './button.module.css'

const Button = () => {
    return (
        <button type="submit" className={styles.button}>
            <span>Subscribe to monthly newsletter</span>
        </button>
    )
}

export default Button