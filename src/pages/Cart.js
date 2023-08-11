import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cartItems, setCartItems }) => {
  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    updatedCartItems[index].totalPrice = updatedCartItems[index].price * newQuantity;
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (index) => {
    const updatedQuantity = Math.max(1, cartItems[index].quantity - 1);
    handleQuantityChange(index, updatedQuantity);
  };

  const handleIncrement = (index) => {
    const updatedQuantity = cartItems[index].quantity + 1;
    handleQuantityChange(index, updatedQuantity);
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  return (
    <div className='cartContainer'>
      <h2>Your Cart</h2>
      <div className='cartItems'>
        {cartItems.map((item, index) => (
          <div key={index} className='cartItem'>
            <img src={item.image} alt={item.name} />
            <div className='cartItemDetails'>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <div className='quantityControls'>
                <button className='quantityButton' onClick={() => handleDecrement(index)}>-</button>
                <span className='quantity'>{item.quantity}</span>
                <button className='quantityButton' onClick={() => handleIncrement(index)}>+</button>
              </div>
              <p>Total: ${item.totalPrice}</p>
              <button className='removeButton' onClick={() => handleRemoveItem(index)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <button className='checkoutButton'>Checkout</button>
    </div>
  );
};

export default Cart;
