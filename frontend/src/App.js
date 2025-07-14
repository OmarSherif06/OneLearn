import "./App.css";
import Nav from "./Components/Nav.js";
import Home from "./Components/Home.js";
function App() {
  return (
    <div className="App">
      <header className="nav"><Nav/></header>

      < main className="main-content">
      
        <section><Home/></section>  
      </main>

      
    </div>
  );
}

export default App;
