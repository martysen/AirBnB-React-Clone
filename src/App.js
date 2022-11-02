import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import CardStatic from "./components/CardStatic";
import Card from "./components/Card";

// import ExoImage1 from "./images/detroit-murals.jpeg";
// import ExoImage2 from "./images/emerging-artists.webp";

// import experience list stored as an array of objects in CardData.js
import data from "./CardData";

function App() {
  // Store data from CardData.js into an array using .map()
  // return the JSX element that needs to be called while rendering
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id} //.map() needs every item to have a unique key, otherwise you get a warning
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        city={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      {/* <CardStatic /> */}
      <section className="section-experience-list">
        {/* Call  the array that stores JSX elements of card */}
        {cards}
      </section>
    </div>
  );
}

// export to index.js
export default App;
