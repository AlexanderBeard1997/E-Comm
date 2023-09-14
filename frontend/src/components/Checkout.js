import React from 'react';


const Checkout = () => {
  return (
    <form>
      <div>
        <label for="email">Enter your email:</label>
        <input type="email" id="email" name="email" required placeholder="Enter your email address" />
      </div>

      <button type="submit">Finalise Purchase</button>
    </form>
  );
}

export default Checkout;
