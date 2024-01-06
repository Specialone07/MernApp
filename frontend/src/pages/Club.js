import React, { useState } from 'react';
import ars from '../assest/ars.png';
import newI from '../assest/new.png';
import rm from '../assest/rm.png';
import boca from '../assest/boca.png';
import chel from '../assest/chel.png';
import sport from '../assest/sport.png';
import real from '../assest/real.png';
import celtic from '../assest/celtic.PNG';
import pCr from '../assest/pCr.PNG';
import Avenz from '../assest/Avenz.PNG';
import carlsberg from '../assest/carlsberg.PNG';
import cCL from '../assest/cCL.PNG';
import cr from '../assest/cr.PNG';
import eb from '../assest/eb.PNG';
import Caway from '../assest/Caway.PNG';
import LCL from '../assest/LCL.PNG';
import MCity from '../assest/MCity.PNG';
import Venz from '../assest/Venz.PNG';
import teka  from '../assest/teka.PNG';
import Cart from './Cart';

const Club = () => {
  const [cart, setCart] = useState([]);

  const jerseys = [
    { id: 1, name: 'Arsenal', imageUrl: ars },
    { id: 2, name: 'Newcastle Utd', imageUrl: newI },
    { id: 3, name: 'Real Madrid', imageUrl: rm },
    { id: 5, name: 'Boca Juniors', imageUrl: boca },
    { id: 7, name: 'Chelsea', imageUrl: chel },
    { id: 9, name: 'Sporting CP', imageUrl: sport },
    { id: 10, name: 'Real Madrid', imageUrl: real },
    { id: 11, name: 'Celtic', imageUrl: celtic },
    { id: 12, name: 'Portugal', imageUrl: pCr },
    { id: 13, name: 'Venezia', imageUrl: Avenz },
    { id: 14, name: 'Liv away', imageUrl: carlsberg },
    { id: 15, name: 'Liv 1996', imageUrl: cCL },
    { id: 16, name: 'Sporting', imageUrl: cr },
    { id: 17, name: 'England', imageUrl: eb },
    { id: 18, name: 'Celtic away', imageUrl: Caway },
    { id: 19, name: 'Liverpool', imageUrl: LCL },
    { id: 20, name: 'Man City', imageUrl: MCity },
    { id: 21, name: 'Venz', imageUrl: Venz },
    { id: 22, name: 'Real Madrid', imageUrl: teka },
    // Add more jerseys as needed
  ];

  const addToCart = (jersey) => {
    const existingItemIndex = cart.findIndex((item) => item.id === jersey.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...jersey, quantity: 1 }]);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        <b>Club Jersey</b>
      </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {jerseys.map((jersey) => (
          <div key={jersey.id} style={{ margin: '10px', textAlign: 'center', cursor: 'pointer' }}>
            <img
              src={jersey.imageUrl}
              alt={jersey.name}
              style={{ maxWidth: '200px', maxHeight: '200px' }}
            />
            <p>{jersey.name}</p>
            <button onClick={() => addToCart(jersey)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {cart.length > 0 && <Cart cartItems={cart} />}
    </div>
  );
};

export default Club;
