import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

function App() {
  const [gameInfo, setGameInfo] = useState([]);
  const [cart, setCart] = useState([]); // To store items in the cart

  useEffect(() => {
    fetchGameData();
  }, []);

  const fetchGameData = async () => {
    try {
      const gameIds = [452, 453, 454, 455, 456, 457, 458, 459, 460, 461]; // Add more game IDs if needed
      const gameData = [];

      for (const gameId of gameIds) {
        const response = await fetch(`https://www.freetogame.com/api/game?id=${gameId}`);
        if (!response.ok) {
          throw new Error(`Game ${gameId} not found`);
        }
        const data = await response.json();

        // Use Faker.js to generate a random price
        const randomPrice = formatPrice(faker.datatype.float({ min: 20, max: 40 }));

        gameData.push({
          title: data.title,
          thumbnail: data.thumbnail,
          price: randomPrice,
        });
      }

      setGameInfo(gameData);
    } catch (error) {
      alert(`Error fetching Game data: ${error.message}`);
    }
  };

  const addToCart = (game) => {
     console.log("Adding to cart:", game); // Debugging statement
    setCart([...cart, game]);
  };

  // Function to format a number as a price with £ symbol
  const formatPrice = (price) => {
    return `£${price.toFixed(2)}`;
  };

  return (
    <div className="App">
      <h1>Game Information</h1>

      {gameInfo.map((game, index) => (
        <div key={index}>
          <h1>Title: {game.title}</h1>
          <p>Price: {game.price}</p>
          <img src={game.thumbnail} alt={`Game ${index + 1}`} />
          <br></br>
          <button onClick={() => addToCart(game)}>Add To Cart</button>
        </div>
      ))}

<h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.title} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
