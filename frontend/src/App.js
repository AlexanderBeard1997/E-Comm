
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import GameList from '../components/GameList';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';

// combine all components and handle state management for the cart

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
      <Route exact path="/" render={() => <GameList addToCart={addToCart} />} />
      <Route path="/cart" render={() => <Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
      <Route path="/checkout" component={Checkout} />
    </BrowserRouter>
    </div>
  );
}

export default App;