import styles from '../Styles/About.module.css';

function About() {
  return (
    <div className={styles.About}>
      <h2>About</h2>
      <p>
        We are a passionate group of developers committed to building a powerful and user-friendly platform.
        Our team is divided into frontend and backend specialists working closely together to create seamless experiences.
      </p>
        <br/>
      <section>
        <h2>Frontend Team</h2>
        <ul>
          <li>Abdelrahman Hany</li>
          <li>Omar Ali</li>
          <li>Omar Walid</li>
        </ul>
      </section>

      <section>
        <h2>Backend Team</h2>
        <ul>
          <li>Abdalla Hany</li>
          <li>Omar Sherif</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
