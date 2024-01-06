import React, { useState } from 'react';
import bel from '../assest/bel.png';
import bra from '../assest/bra.png';
import en from '../assest/en.png';

const Country = () => {
  const jerseys = [
    { id: 1, name: 'England', imageUrl: en },
    { id: 2, name: 'Brazil', imageUrl: bra },
    { id: 3, name: 'Belgium', imageUrl: bel },
    // Add more jerseys as needed
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJersey, setSelectedJersey] = useState(null);

  const openModal = (jersey) => {
    setSelectedJersey(jersey);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJersey(null);
    setModalOpen(false);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        <b>Country Jersey</b>
      </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {jerseys.map((jersey) => (
          <div
            key={jersey.id}
            style={{ margin: '10px', textAlign: 'center', cursor: 'pointer' }}
            onClick={() => openModal(jersey)}
          >
            <img
              src={jersey.imageUrl}
              alt={jersey.name}
              style={{ maxWidth: '200px', maxHeight: '200px' }}
            />
            <p>{jersey.name}</p>
          </div>
        ))}
      </div>

      {modalOpen && selectedJersey && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={closeModal}
        >
          <div style={{ maxWidth: '80%', maxHeight: '80%' }} onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedJersey.imageUrl}
              alt={selectedJersey.name}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
