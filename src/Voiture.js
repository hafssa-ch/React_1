import PropTypes from 'prop-types';

function Voiture({ marque, modele, couleur }) {
  // Définition des couleurs de bordure selon la couleur
  const getBorderColor = (couleur) => {
    const colors = {
      'Rouge': '#ff4444',
      'Noir': '#333333',
      'Blanc': '#cccccc',
      'Bleu': '#4444ff',
      'Vert': '#44aa44'
    };
    return colors[couleur] || '#667eea';
  };

  // Style pour la puce de couleur
  const colorStyle = {
    backgroundColor: getBorderColor(couleur),
    padding: '5px 15px',
    borderRadius: '20px',
    color: couleur === 'Blanc' ? '#333' : 'white',
    display: 'inline-block'
  };

  return (
    <div className="voiture-card" style={{ borderLeftColor: getBorderColor(couleur) }}>
      <div className="voiture-marque">{marque}</div>
      <div className="voiture-modele">{modele}</div>
      <div className="voiture-couleur" style={colorStyle}>
        🎨 {couleur}
      </div>
    </div>
  );
}

Voiture.propTypes = {
  marque: PropTypes.string.isRequired,
  modele: PropTypes.string.isRequired,
  couleur: PropTypes.string.isRequired,
};

export default Voiture;