const categories = [
  {
    _id: 1,
    imageUrl: "",
    name: "City Builders",
    slug: "city-builders",
  },
  {
    _id: "2",
    imageUrl: "",
    name: "Vehicles",
    slug: "vehicles",
  },
  {
    _id: "3",
    imageUrl: "",
    name: "Mechanical Parts",
    slug: "mechanical-parts",
  },
  {
    _id: "4",
    imageUrl: "",
    name: "Space Exploration",
    slug: "space-exploration",
  },
];

const users = [
  {
    _id: 1,
    name: "Lamia",
    email: "",
    username: "",
    password: "",
    imageUrl: "",
    type: "seller/customer",
  },
];

const products = [
  {
    name: "Police Station",
    slug: "police-station",
    imageUrl: "",
    seller: 1,
    categoryId: 1,
    rating: 4.5,
    price: 49.99,
    stock: 50,
    description:
      "Build and protect the with this exciting Police Station set. Catch the crooks and keep the city safe!",
  },
  {
    name: "Fire Station",
    slug: "fire-station",
    imageUrl: "",
    seller: 1,
    categoryId: 1,
    rating: 4.2,
    price: 39.99,
    stock: 75,
    description:
      "Join the firefighters in their Fire Station and tackle exciting rescue missions. Save the day!",
  },
  {
    name: "Construction Site",
    slug: "construction-site",
    imageUrl: "",
    seller: 1,
    categoryId: 1,
    rating: 4.0,
    price: 29.99,
    stock: 100,
    description:
      "Build your own construction site with this set. Use the crane and vehicles to complete exciting building projects!",
  },
  {
    name: "Airport",
    slug: "airport",
    imageUrl: "",
    seller: 1,
    categoryId: 1,
    rating: 4.3,
    price: 59.99,
    stock: 60,
    description:
      "Experience the thrill of air travel with the Airport set. Build the airport, control tower, and planes for endless fun!",
  },

  {
    name: "Bullet Train",
    slug: "bullet train",
    imageUrl: "",
    seller: 1,
    categoryId: 2,
    rating: 4.8,
    price: 79.99,
    stock: 40,
    description:
      "Take a ride on the Train and explore the city. Set up tracks, control the train, and embark on exciting adventures!",
  },
  {
    name: "Police Car",
    slug: "police-car",
    imageUrl: "",
    seller: 1,
    categoryId: 2,
    rating: 4.5,
    price: 49.99,
    stock: 50,
    description:
      "Build and protect the with this exciting Police Car set. Catch the crooks and keep the city safe!",
  },
  {
    name: "Fire Fighting Car",
    slug: "fire-fighting-car",
    imageUrl: "",
    seller: 1,
    categoryId: 2,
    rating: 4.2,
    price: 39.99,
    stock: 75,
    description:
      "Join the firefighters in their Fire Fighting Car and tackle exciting rescue missions. Save the day!",
  },
  {
    name: "Excavator",
    slug: "excavator",
    imageUrl: "",
    seller: 1,
    categoryId: 2,
    rating: 4.0,
    price: 29.99,
    stock: 100,
    description:
      "Build your own excavator with this set. Use the crane and vehicles to complete exciting building projects!",
  },
  {
    name: "Airplane",
    slug: "Airplane",
    imageUrl: "",
    seller: 1,
    categoryId: 2,
    rating: 4.3,
    price: 59.99,
    stock: 60,
    description:
      "Experience the thrill of air travel with the Airplane set. Build the Airplane, control tower, and planes for endless fun!",
  },

  {
    name: "Gear Set",
    slug: "gear-set",
    imageUrl: "https://example.com/gear-set.jpg",
    seller: 1,
    categoryId: 3,
    rating: 4.5,
    price: 24.99,
    stock: 50,
    description:
      "Expand your creations with this Gear Set. Includes a variety of gears for mechanical functions and movement!",
  },
  {
    name: "Pneumatic Cylinder",
    slug: "pneumatic-cylinder",
    imageUrl: "https://example.com/pneumatic-cylinder.jpg",
    seller: 1,
    categoryId: 3,
    rating: 4.2,
    price: 17.99,
    stock: 60,
    description:
      "Add pneumatic functionality to your models with this Pneumatic Cylinder. Control movement and create realistic actions!",
  },
  {
    name: "Axle Pack",
    slug: "axle-pack",
    imageUrl: "https://example.com/axle-pack.jpg",
    seller: 1,
    categoryId: 3,
    rating: 4.0,
    price: 19.99,
    stock: 70,
    description:
      "Enhance your builds with this Axle Pack. Contains a selection of axles for precise movement and power transmission!",
  },
  {
    name: "Steering System",
    slug: "steering-system",
    imageUrl: "https://example.com/steering-system.jpg",
    seller: 1,
    categoryId: 3,
    rating: 4.3,
    price: 21.99,
    stock: 55,
    description:
      "Achieve realistic steering in your vehicles with this Steering System. Control the direction of your models with precision!",
  },
  {
    name: "Suspension System",
    slug: "suspension-system",
    imageUrl: "https://example.com/suspension-system.jpg",
    seller: 1,
    categoryId: 3,
    rating: 4.1,
    price: 23.99,
    stock: 65,
    description:
      "Improve the performance of your vehicles with this Suspension System. Create realistic suspension and absorb shocks!",
  },

  {
    name: "Space Shuttle Discovery",
    slug: "space-shuttle-discovery",
    imageUrl: "https://example.com/space-shuttle-discovery.jpg",
    seller: 1,
    categoryId: 4,
    rating: 4.8,
    price: 199.99,
    stock: 15,
    description:
      "Embark on an epic space mission with the Space Shuttle Discovery. Explore the wonders of space and satellite deployment!",
  },
  {
    name: "International Space Station",
    slug: "international-space-station",
    imageUrl: "https://example.com/international-space-station.jpg",
    seller: 1,
    categoryId: 4,
    rating: 4.7,
    price: 69.99,
    stock: 25,
    description:
      "Experience the marvel of space with the International Space Station. Build a detailed replica and learn about space exploration!",
  },
  {
    name: "Star Wars Millennium Falcon",
    slug: "star-wars-millennium-falcon",
    imageUrl: "https://example.com/star-wars-millennium-falcon.jpg",
    seller: 1,
    categoryId: 4,
    rating: 4.9,
    price: 159.99,
    stock: 20,
    description:
      "Join the Star Wars universe and pilot the iconic Millennium Falcon. Embark on epic space adventures with this highly detailed LEGO set!",
  },
  {
    name: "NASA Apollo 11 Lunar Lander",
    slug: "nasa-apollo-11-lunar-lander",
    imageUrl: "https://example.com/nasa-apollo-11-lunar-lander.jpg",
    seller: 1,
    categoryId: 4,
    rating: 4.6,
    price: 99.99,
    stock: 30,
    description:
      "Relive the historic moon landing with the NASA Apollo 11 Lunar Lander. Build the lunar module and explore the moon's surface!",
  },
  {
    name: "Women of NASA",
    slug: "women-of-nasa",
    imageUrl: "https://example.com/women-of-nasa.jpg",
    seller: 1,
    categoryId: 4,
    rating: 4.5,
    price: 24.99,
    stock: 35,
    description:
      "Celebrate the achievements of women in space with the Women of NASA set. Learn about their contributions and inspire young minds!",
  },
];
