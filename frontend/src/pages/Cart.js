import React from 'react';

const Cart = ({ cartItems }) => {
  if (!cartItems || cartItems.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} style={{ margin: '10px', textAlign: 'center' }}>
          <img
            src={item.imageUrl}
            alt={item.name}
            style={{ maxWidth: '200px', maxHeight: '200px' }}
          />
          <p>{item.name}</p>
          <p>Description: {item.description}</p>
          {item.price !== undefined && (
            <>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Stock: {item.stock}</p>
              <p>Quantity: {item.quantity}</p>
              {/* Add more details as needed */}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cart;
