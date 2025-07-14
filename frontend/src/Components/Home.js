import styles from '../Styles/Home.module.css'
import image from '../images/kid.png'

function Home() {
  return (
    <div className={styles.container}>

    <div className={styles.parent}>

      <h1 className={styles.content}>
        <span>Empower your</span>
        <span>learning journey</span>
        <span> with <span className = {styles.bold}>OneLearn</span></span>
      </h1>

      <img src={image} alt ="Working code young kid learning programming with laptop"></img>
      </div>

      <p>Challenge yourself with dynamic, interactive quizzes designed to boost understanding, enhance memory retention, and make learning more engaging and effective. </p>
      <br/>
      <button> Explore Quizees</button>
    </div>
  );
}

export default Home;
