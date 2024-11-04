// src/components/Voiture.jsx
import React from 'react';

const Voiture = ({ voiture, onSupprimer }) => {
  return (
    <tr>
      <td><img src={voiture.image} alt={voiture.Marque} width="100" /></td>
      <td>{voiture.Marque}</td>
      <td>{voiture.TypeCarburant}</td>
      <td>{voiture.PrixLocation} MAD</td>
      <td>
        <button onClick={() => onSupprimer(voiture.id)}>Supprimer</button>
      </td>
    </tr>
  );
};

export default Voiture;
