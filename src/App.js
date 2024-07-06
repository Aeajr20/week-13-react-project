import React, { useState } from 'react';
import './App.css';

// Import the character data
import characters from './characters.json';

// LoginForm Component
function LoginForm() {
  return (
    <div className="login-form">
      <h3>Log In</h3>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
    </div>
  );
}

// Navigation Component
function Navigation() {
  return (
    <nav className="navbar">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  );
}

// FloatingEquations Component
function FloatingEquations() {
  // Array of equations
  const equations = ['E = mc^2', 'a^2 + b^2 = c^2', 'F = ma', 's = ut + 1/2at^2'];

  // Function to generate a random equation
  const getRandomEquation = () => {
    const index = Math.floor(Math.random() * equations.length);
    return equations[index];
  };

  // Function to generate a random position
  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    return { x, y };
  };

  // Generate 50 floating equations
  const floatingEquations = Array.from({ length: 50 }, () => ({
    equation: getRandomEquation(),
    position: getRandomPosition(),
  }));

  return (
    <div>
      {floatingEquations.map((eq, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${eq.position.x}px`,
            top: `${eq.position.y}px`,
            color: 'white',
            fontSize: '20px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          {eq.equation}
        </div>
      ))}
    </div>
  );
}



function App() {
  // Use state to keep track of the current character and search term
  const [currentCharacter, setCurrentCharacter] = useState(characters[0]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle character selection
  const handleCharacterSelect = (character) => {
    setCurrentCharacter(character);
  };

  // Filter characters based on search term
  const filteredCharacters = characters.filter(character =>
    character.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <h1>Rick and Morty Character Viewer</h1>
        <input
          type="text"
          placeholder="Search characters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="character-selector">
          {filteredCharacters.map((character, index) => (
            <button key={index} onClick={() => handleCharacterSelect(character)}>
              {character.fullName}
            </button>
          ))}
        </div>
        {5+5}
        <div className="character-display">
          <h2>{currentCharacter.fullName}</h2>
          <img src={currentCharacter.image} alt={currentCharacter.fullName} />
          <p>Character Trait: {currentCharacter.characterTrait}</p>
          <p>Status: {currentCharacter.status}</p>
          <p>Species: {currentCharacter.species}</p>
          <p>Origin: {currentCharacter.origin}</p>
          <p>Current Location: {currentCharacter.currentLocation}</p>
          <p>Favorite Catchphrase: {currentCharacter.favoriteCatchphrase}</p>
        </div>
      </header>
      <LoginForm />
    </div>
  );
}

export default App;
