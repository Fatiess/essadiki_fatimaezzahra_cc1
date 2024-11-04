import React, { useState } from 'react';
import Voiture from './Voiture';
import AjouterVoiture from './AjouterVoiture';

const ListeVoitures = () => {
  const [voitures, setVoitures] = useState([
    { id: 'v1', Marque: 'jeep', TypeCarburant: 'Diesel', PrixLocation: 200, image: '/images/jeep.jpg' },
    { id: 'v2', Marque: 'Mercedes', TypeCarburant: 'Essence', PrixLocation: 400, image: '/images/mercedes.jpeg' }
  ]);

  const [afficherFormulaire, setAfficherFormulaire] = useState(false); 

  const handleSupprimer = (id) => {
    if (window.confirm('Voulez-vous vraiment supprimer cette voiture ?')) {
      setVoitures(voitures.filter((voiture) => voiture.id !== id));
    }
  };

  const ajouterVoiture = (formData) => {
    const nouvelleVoiture = {
      id: `v${Date.now()}`,
      Marque: formData.get('Marque'),
      TypeCarburant: formData.get('TypeCarburant'),
      PrixLocation: formData.get('PrixLocation'),
      image: URL.createObjectURL(formData.get('image')) 
    };

    setVoitures([...voitures, nouvelleVoiture]);
  };

  const toggleFormulaire = () => {
    setAfficherFormulaire(!afficherFormulaire); 
  };

  return (
    <div>
      <h1>Liste des Voitures</h1>
      <button onClick={toggleFormulaire}>
        {afficherFormulaire ? 'Annuler' : 'Ajouter une Voiture'}
      </button>
      {afficherFormulaire && ( 
        <AjouterVoiture onAjouter={ajouterVoiture} />
      )}
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Marque</th>
            <th>Type de Carburant</th>
            <th>Prix de Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {voitures.map((voiture) => (
            <Voiture key={voiture.id} voiture={voiture} onSupprimer={handleSupprimer} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListeVoitures;
