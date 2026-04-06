import './App.css';
import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';

function App() {
  const utilisateur = { 
    nom: 'Emma', 
    photo: 'https://randomuser.me/api/portraits/women/68.jpg' 
  };

  return (
    <div className="app-container">
      {/* Section Hello World */}
      <div className="card hello-world">
        <HelloWorld />
      </div>

      {/* Section Greetings */}
      <div className="section">
        <h2 className="section-title">✨ Salutations</h2>
        <div className="greetings-container">
          <div className="greeting-card">
            <Greeting prenom="Alice" />
          </div>
          <div className="greeting-card">
            <Greeting prenom="Mohamed" />
          </div>
        </div>
      </div>

      {/* Section Profil */}
      <div className="section">
        <h2 className="section-title">👤 Profil</h2>
        <div className="profil-container">
          <Profil utilisateur={utilisateur} taille={120} />
        </div>
      </div>

      {/* Section Voitures */}
      <div className="section">
        <h2 className="section-title">🚗 Catalogue Voitures</h2>
        <div className="voitures-grid">
          <Voiture marque="Toyota" modele="Corolla" couleur="Rouge" />
          <Voiture marque="BMW" modele="X5" couleur="Noir" />
          <Voiture marque="Tesla" modele="Model 3" couleur="Blanc" />
        </div>
      </div>

      {/* Section Liste de Courses */}
      <div className="section">
        <h2 className="section-title">🛍️ Liste de Courses</h2>
        <div className="courses-container">
          <ListeCourses elements={['Pain', 'Lait', 'Fromage']} />
          <ListeCourses elements={['Pomme', 'Banane', 'Orange']} />
        </div>
      </div>
    </div>
  );
}

export default App;