import styles from '../Styles/Contact.module.css';

function Contact({ darkMode }) {
  return (
    <section id='Contactus'>
      <div className={`${styles.container} ${darkMode ? styles.dark : ""}`}>
        <h1 className={styles.content}>
          <span>Contact</span>
        </h1>

        <form className={styles.form}>
          <label>
            Name:
            <input type="text" name="name" placeholder="Your Name" required />
          </label>

          <label>
            Email:
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>

          <label>
            Message:
            <textarea name="message" placeholder="Your message..." rows="5" required></textarea>
          </label>

          <button type="submit" ><a href='mailto:3abdohany7@gmail.com'className= {styles.mail} >Send Message</a></button>
        </form>
      </div>
    </section>
  );
}

export default Contact;