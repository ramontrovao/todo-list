import styles from "./Footer.module.scss"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Developed with <span id={styles.heart}>&hearts;</span> by Ramon Pinheiro</p>
        </footer>
    )
}