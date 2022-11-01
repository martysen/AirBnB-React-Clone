import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import CardStatic from "./components/CardStatic";
import Card from "./components/Card";

import ExoImage1 from "./images/detroit-murals.jpeg";
import ExoImage2 from "./images/emerging-artists.webp";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      {/* <CardStatic /> */}
      {/* Now You can reuse this component and pass new values everytime */}
      <Card
        img={ExoImage1}
        rating={4.9}
        reviewCount={20}
        city="Detroit"
        title="See Detroit's Murals on an Electric Bikes"
        price={100}
      />

      <Card
        img={ExoImage2}
        rating={5.0}
        reviewCount={4}
        city="Detroit"
        title="Discover Emerging Artists in Detroit"
        price={45}
      />
    </div>
  );
}

// export to index.js
export default App;
