import GameList from '../components/GameList';

function Cart({ cartItems, removeFromCart }) {
    const total = cartItems.reduce((acc, game) => acc + game.Price, 0);
  
    return (
      <div>
        {cartItems.map(item => (
          <div>
            <span>{item.Name} - ${item.Price}</span>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))}
        <div>Total: ${total}</div>
        <button><a href="/checkout">Checkout</a></button>
      </div>
    );
  }
  
  export default Cart;
  