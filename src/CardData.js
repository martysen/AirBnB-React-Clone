import DetroitMurals from "./images/detroit-murals.jpeg";
import EmergingArtists from "./images/emerging-artists.webp";

export default [
  {
    id: 1,
    title: "Detroit Murals on e-bike",
    description: "watch detroit mural on e-bike",
    price: 45,
    coverImg: DetroitMurals,
    stats: {
      rating: 5.0,
      reviewCount: 20,
    },
    location: "Detroit",
    openSpots: 30,
  },
  {
    id: 2,
    title: "Emerging Artists of Detroit",
    description: "watch emerging artists in detroit",
    price: 97,
    coverImg: EmergingArtists,
    stats: {
      rating: 4.9,
      reviewCount: 40,
    },
    location: "Detroit",
    openSpots: 0,
  },
];
