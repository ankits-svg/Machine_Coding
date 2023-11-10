// Button.js
import React from 'react';

const Button = ({ id, count, onIncrement }) => (
  <div>
    <p>Button {id} Count: {count}</p>
    <button onClick={() => onIncrement(id)}>Increment</button>
  </div>
);

export default Button;
