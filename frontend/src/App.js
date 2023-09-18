import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import GameList from './components/GameList';
import Cart from './components/cart';
import Checkout from './components/Checkout';

 const App = () => {
 const [cartItems, setCartItems] = useState([]);

   const addToCart = (game) => {
    
   setCartItems(prevItems => [...prevItems, game]);
  };

   const removeFromCart = (gameToRemove) => {
   setCartItems(prevItems => prevItems.filter(game => game.id !== gameToRemove._id));
  };

   return (
   <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<GameList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;