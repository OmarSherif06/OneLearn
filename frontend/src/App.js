import "./App.css";
import Nav from "./Components/Nav.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
function App() {
  return (
    <div className="App">
      <header className="nav"><Nav/></header>

      < main className="main-content">
        
        <section id='Home'><Home/></section> 
        <section id='About'><About/></section> 
      </main>

      
    </div>
  );
}

export default App;
