import "./App.css";
import Nav from "./Components/Nav.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Questions from "./Components/Questions.js"
import Footer from "./Components/Footer.js";
import { useState, useEffect } from "react";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkMode");
    } else {
      document.body.classList.remove("darkMode");
    }
  }, [darkMode]);

  return (
    <div className="App">
      <header className="nav">
        <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
      <main className="main-content">
        <section className="mainContentSection">
          <Home darkMode={darkMode} />
        </section>
        <section className="mainContentSection">
          <Questions darkMode={darkMode} />
        </section>
        <section className="mainContentSection">
          <About darkMode={darkMode} />
        </section>
        <section className="mainContentSection">
          <Contact darkMode={darkMode} />
        </section>
      </main>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
