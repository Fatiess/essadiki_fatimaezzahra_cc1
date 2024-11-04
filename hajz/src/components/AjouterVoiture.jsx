// src/components/AjouterVoiture.jsx
import React, { useState } from 'react';

const AjouterVoiture = ({ onAjouter }) => {
  const [nouvelleVoiture, setNouvelleVoiture] = useState({
    id: '',
    Marque: '',
    TypeCarburant: '',
    PrixLocation: '',
    image: null // Changez à null pour un fichier
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      // Mettez à jour l'état pour le fichier image
      setNouvelleVoiture((prev) => ({
        ...prev,
        [name]: files[0] // Prendre le premier fichier
      }));
    } else {
      setNouvelleVoiture((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nouvelleVoiture.Marque && nouvelleVoiture.PrixLocation && nouvelleVoiture.image) {
      const formData = new FormData();
      formData.append('id', `v${Date.now()}`);
      formData.append('Marque', nouvelleVoiture.Marque);
      formData.append('TypeCarburant', nouvelleVoiture.TypeCarburant);
      formData.append('PrixLocation', nouvelleVoiture.PrixLocation);
      formData.append('image', nouvelleVoiture.image);

      onAjouter(formData); // Passer le FormData à la fonction d'ajout
      setNouvelleVoiture({ id: '', Marque: '', TypeCarburant: '', PrixLocation: '', image: null });
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
        type="file"
        name="image"
        onChange={handleChange}
        accept="image/*" // Pour limiter aux fichiers d'image
        required
      />
      <button type="submit">Ajouter Voiture</button>
    </form>
  );
};

export default AjouterVoiture;
