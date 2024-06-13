import React from 'react';
import { Colors } from './List';

const colorArray = [
  { id: 1, name: 'Red' },
  { id: 2, name: 'Blue' },
  { id: 3, name: 'Green' },
];

const App = () => {
  return (
    <div>
      <h1>Color List</h1>
      <Colors colors={colorArray} />
    </div>
  );
};

export default App;