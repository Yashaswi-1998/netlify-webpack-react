import React from 'react';

const App = () => {
  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <div className="image-container">
        <img src="https://placekitten.com/200/300" alt="Cat" />
        <img src="https://placedog.net/200/300" alt="Dog" />
        <img src="https://placebeard.it/200x300" alt="Bird" />
      </div>
    </div>
  );
};

export default App;