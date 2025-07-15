import { useState } from 'react';
import styles from '../Styles/Home.module.css'
import image from '../images/kid.png'

function Home({ darkMode }) {
  const [sideBar, setSideBar] = useState(false)
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : ""}`}>
      <div className={showVideo ? styles.blurred : ""}>
        <div className={styles.parent}>
          <h1 className={styles.content}>
            <span>Empower Your</span>
            <span>Learning Journey</span>
            <span>with <span className={styles.bold}>OneLearn</span></span>
          </h1>
          <img src={image} alt="Working code young kid learning programming with laptop" />
        </div>
        <p>
          Challenge yourself with dynamic, interactive quizzes designed to boost
          understanding, enhance memory retention, and make learning more engaging and effective.
        </p>
        <br />
        <button onClick={() => setSideBar(!sideBar)}>Explore courses</button>
        <div className={`sidebar ${sideBar ? "active" : ""}`}>
          <h2>Quiz Categories</h2>
          <ul style={{ cursor: "pointer" }}>
            <li onClick={() => setShowVideo(!showVideo)}>Python</li>
            <li onClick={() => setShowVideo(!showVideo)}>JavaScript</li>
            <li onClick={() => setShowVideo(!showVideo)}>C++</li>
            <li onClick={() => setShowVideo(!showVideo)}>Java</li>
          </ul>
        </div>
        {sideBar && (
          <div
            className={styles.overlay}
            style={{ zIndex: 999 }}
            onClick={() => {
              setSideBar(false);
            }}
          ></div>
        )}
      </div>
      <div className={showVideo ? styles.overlay : ""} onClick={() => {
        setShowVideo(false);
      }}></div>
      <div className={styles.courseVideoContainer} id={showVideo ? styles.shown : styles.hidden}>
        <iframe
          width="840"
          height="472"
          src="https://www.youtube.com/embed/SqcY0GlETPk?si=WabWQU3XwxD2_imw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
