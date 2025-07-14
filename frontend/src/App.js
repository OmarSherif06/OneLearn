import "./App.css";
import Nav from "./Components/Nav.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Questions from "./Components/Questions.js"

function App() {

  return (
    <div className="App">
      <header className="nav"><Nav/></header>

      <main className="main-content">

        <section id='Home'><Home /></section> 
        <section id='Questions'><Questions /></section>
        <section id='About'><About /></section> 
        <section id="Contact"><Contact /></section>

      </main>
      
    </div>
  );
}

export default App;
