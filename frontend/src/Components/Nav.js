import styles from '../Styles/Nav.module.css'

function Nav({ darkMode, setDarkMode }) {
    return (
        <div className={styles.nav}>
            <div className={styles.title}>
                <p className={styles.logo}>🎓</p>
                <h3>OneLearn</h3>
            </div>
            <div className={styles.buttons}>
                <button><a href='#Contactus' id='contact'>Contact us</a> </button>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "Light" : "Dark"}
                </button>
            </div>
        </div>
    )
}

export default Nav;