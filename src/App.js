import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardStatic from "./components/CardStatic";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <CardStatic />
    </div>
  );
}

// export to index.js
export default App;
