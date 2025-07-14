import styles from "../Styles/Contact.module.css"

function Contact() {
    return(
        <div className={styles.Contact}>
            <br></br>
            <h3><b>Contact Us</b></h3>
            <br></br>
                <ul>
                    <div className={styles.boxmail}>
                    <li>
                        <b><a href="mailto:3abdohany7@gmail.com">Email: Abdelrahman Hany</a></b>
                    </li>
                    </div>
                    <div className={styles.boxmail}>
                    <li>
                       <b><a href="mailto:omarserag1046@gmail.com">Email: Omar Ali</a></b>
                    </li>
                    </div>
                    <div className={styles.boxmail}>
                    <li>
                        <b><a href="mailto:omarwalid882006@gmail.com">Email: Omar Walid</a></b>
                    </li>
                    </div>
                    <div className={styles.boxmail}>
                    <li>
                        <b><a href="mailto:abdallahany716@gmail.com">Email: Abdalla Hany</a></b>
                    </li>
                    </div>
                    <div className={styles.boxmail}>
                    <li>
                        <b><a href="mailto:omar@gmail.com">Email: Omar Sherif</a></b>
                    </li>
                    </div>
                </ul>
            </div>
        
    );

}
export default Contact;