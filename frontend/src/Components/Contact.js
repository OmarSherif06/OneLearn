import styles from '../Styles/Contact.module.css';

function Contact() {
  return (
    <div className={styles.container}>
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

          <button type="submit">Send Message</button>
        </form>
      </div>
  );
}

export default Contact;