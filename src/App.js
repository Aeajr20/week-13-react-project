import React, { useState } from 'react';
import './App.css';

// Import the character data
import characters from './characters.json';

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
        <div className="character-display">
          <h2>{currentCharacter.fullName}</h2>
          <p>Character Trait: {currentCharacter.characterTrait}</p>
          <p>Status: {currentCharacter.status}</p>
          <p>Species: {currentCharacter.species}</p>
          <p>Origin: {currentCharacter.origin}</p>
          <p>Current Location: {currentCharacter.currentLocation}</p>
          <p>Favorite Catchphrase: {currentCharacter.favoriteCatchphrase}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
