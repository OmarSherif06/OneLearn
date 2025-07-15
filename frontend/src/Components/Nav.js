import styles from '../Styles/Nav.module.css'
import { useEffect, useState } from 'react'

function Nav() {
    const [isDark, setDark] = useState(false);
    useEffect(() =>{
        if (isDark) {
            document.body.classList.add("darkMode")
        } else {
            document.body.classList.remove("darkMode")
        }
    })
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
                <button><a href='#Contactus' id='contact'>Contact us</a> </button>

                <button 
                onClick={() => {setDark(!isDark)}}
                >
                    {(isDark ? "Light" : "Dark")}</button>
                    
            </div>
        </div>
    )
    
}

export default Nav;