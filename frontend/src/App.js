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

        <section className="mainContentSection"><Home /></section> 
        <section className="mainContentSection"><Questions /></section>
        <section className="mainContentSection"><About /></section> 
        <section className="mainContentSection"><Contact /></section>

      </main>
      
    </div>
  );
}

export default App;
