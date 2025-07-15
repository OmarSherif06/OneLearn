import styles from '../Styles/About.module.css';

function About() {
  return (
    <div className={styles.About}>
      <h2>About</h2>
      <p>
        We are a passionate group of developers committed to building a powerful and user-friendly platform.
        Our team is divided into frontend and backend specialists working closely together to create seamless experiences.
      </p>

      <section className='aboutSection'>
        <h2>💻 Frontend Team</h2>
        <p>Crafting beautiful and intuitive user interfaces:</p>
        <ul>
          <li>Abdelrahman Hany</li>
          <li>Omar Ali</li>
          <li>Omar Walid</li>
        </ul>
      </section>

      <section className='aboutSection'>
        <h2>🛠️ Backend Team</h2>
        <p>Ensuring everything runs smoothly behind the scenes:</p>
        <ul>
          <li>Abdalla Hany</li>
          <li>Omar Sherif</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
