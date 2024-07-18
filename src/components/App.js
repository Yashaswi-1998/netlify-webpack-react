import React from 'react';
import catDog from '../base64Images/catDog.jpeg';

const App = () => {
  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <div className="image-container">
        <img src={catDog} alt="Dog" />
        <img src="../../images/cat.jpeg" alt="Cat" />
        <img src="https://placebeard.it/200x300" alt="Bird" />
      </div>
    </div>
  );
};

export default App;