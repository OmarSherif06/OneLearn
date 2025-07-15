import { useState } from 'react';
import styles from '../Styles/Home.module.css'
import image from '../images/kid.png'

const videoLinks = {
  Python: "https://www.youtube.com/embed/XKHEtdqhLK8",
  JavaScript: "https://www.youtube.com/embed/lfmg-EJ8gm4",
  Java: "https://www.youtube.com/embed/xk4_1vDrzzo",
  Html: "https://www.youtube.com/embed/HGTJBPNC-Gw?si=4SIJ2e8lGq7icJsv",
  React: "https://www.youtube.com/embed/CgkZ7MvWUAA?si=MOMyEI4rLQkCsYHj",
};

function Home({ darkMode }) {
  const [sideBar, setSideBar] = useState(false)
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleCategoryClick = (category) => {
    setVideoUrl(videoLinks[category]);
    setShowVideo(true);
    setSideBar(false);
  };

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
            <li onClick={() => handleCategoryClick("Html")}>HTML</li>
            <li onClick={() => handleCategoryClick("JavaScript")}>JavaScript</li>
            <li onClick={() => handleCategoryClick("React")}>React</li>
            <li onClick={() => handleCategoryClick("Java")}>Java</li>
            <li onClick={() => handleCategoryClick("Python")}>Python</li>
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
      <div className={`${styles.courseVideoContainer} ${darkMode && styles.courseVideoContainerDark}`} id={showVideo ? styles.shown : styles.hidden}>
        {showVideo && (
          <iframe
            width="840"
            height="472"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default Home;
