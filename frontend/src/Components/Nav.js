import styles from '../Styles/Nav.module.css'
import { useState } from 'react'

function Nav() {
    const [isDark, setDark] = useState(false);

    return (
        <div className={styles.nav}>
            <div className={styles.title}>
                <p className={styles.logo}>🎓</p>
                <h3>OneLearn</h3>
            </div>

            <div className={styles.buttons}>
                {/* <button>Home</button> */}
                <button>Login</button>
                <button>Signup</button>

                <button 
                className={styles.theme}
                onClick={() => {setDark(!isDark)}}
                >
                    {(isDark ? "Light" : "Dark")}</button>
            </div>
        </div>
    )
}

export default Nav;