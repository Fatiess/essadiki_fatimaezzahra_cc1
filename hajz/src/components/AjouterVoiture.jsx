// src/components/AjouterVoiture.jsx
import React, { useState } from 'react';

const AjouterVoiture = ({ onAjouter }) => {
  const [nouvelleVoiture, setNouvelleVoiture] = useState({
    id: '',
    Marque: '',
    TypeCarburant: '',
    PrixLocation: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNouvelleVoiture((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nouvelleVoiture.Marque && nouvelleVoiture.PrixLocation) {
      onAjouter({ ...nouvelleVoiture, id: `v${Date.now()}` });
      setNouvelleVoiture({ id: '', Marque: '', TypeCarburant: '', PrixLocation: '', image: '' });
    } else {
      alert('Veuillez remplir tous les champs');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Marque"
        value={nouvelleVoiture.Marque}
        onChange={handleChange}
        placeholder="Marque"
        required
      />
      <input
        type="text"
        name="TypeCarburant"
        value={nouvelleVoiture.TypeCarburant}
        onChange={handleChange}
        placeholder="Type Carburant"
      />
      <input
        type="number"
        name="PrixLocation"
        value={nouvelleVoiture.PrixLocation}
        onChange={handleChange}
        placeholder="Prix de Location"
        required
      />
      <input
        type="text"
        name="image"
        value={nouvelleVoiture.image}
        onChange={handleChange}
        placeholder="Nom du fichier image"
      />
      <button type="submit">Ajouter Voiture</button>
    </form>
  );
};

export default AjouterVoiture;
