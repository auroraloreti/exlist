import React from 'react';

const Color = ({ color }) => {
  return <li>{color.name}</li>;
};

const Colors = ({ colors }) => {
  return (
    <ul>
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
  );
};

export { Color, Colors };