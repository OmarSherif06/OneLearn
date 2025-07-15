import { useState } from 'react';
import styles from '../Styles/Home.module.css'
import image from '../images/kid.png'
function Home() {
  const[sideBar,setSideBar] = useState (false)
  let handleSide = () =>{
    setSideBar(!sideBar)
  }
  const [show,setShow] = useState(false);
  let handleshow = () =>{
    setShow(!show);
  }
  const [blur,setBlur] = useState(false);
  let handleBlur = () =>{
    setBlur(!blur);
  }
  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <h1 className={styles.content}>
          <span>Empower Your</span>
          <span>Learning Journey</span>
          <span>with <span className = {styles.bold}>OneLearn</span></span>
        </h1>

        <img src={image} alt ="Working code young kid learning programming with laptop"></img>
      </div>

      <p>Challenge yourself with dynamic, interactive quizzes designed to boost understanding, enhance memory retention, and make learning more engaging and effective. </p>
      <br/>
      <button onClick={handleSide}> Explore couses</button>
      <div className= {styles.positionOfCourse} id= { (show )? styles.frame :styles.frameNot }>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SqcY0GlETPk?si=WabWQU3XwxD2_imw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className= {`sidebar  ${sideBar ? "active" : ""}`}>
        <h2>Quiz Categories </h2>
        <ul className= {styles.listedInbar}>
          <li onClick={handleshow}>Math</li>
          <li onClick={handleshow}>Science</li>
          <li  onClick={handleshow}> History</li>
        </ul>
      </div>
      <div className={sideBar? styles.overlay :styles.ghalat} onClick={handleSide}></div>
      <div className={sideBar? styles.overlaye :styles.ghalate} onClick={handleBlur}></div>
    </div>
    
  );
}

export default Home;
