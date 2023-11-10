// App.js
import React, { useState } from 'react';
import Button from './Components/Button';


const App = () => {
  const [buttonCounters, setButtonCounters] = useState([
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
    // You can add more buttons here dynamically
  ]);

  const handleIncrement = (id) => {
    setButtonCounters((prevCounters) =>
      prevCounters.map((button) =>
        button.id === id ? { ...button, count: button.count + 1 } : button
      )
    );
  };

  const globalCounter = buttonCounters.reduce((sum, button) => sum + button.count, 0);

  return (
    <div>
      {buttonCounters.map((button) => (
        <Button
          key={button.id}
          id={button.id}
          count={button.count}
          onIncrement={handleIncrement}
        />
      ))}
      <p>Global Counter: {globalCounter}</p>
    </div>
  );
};

export default App;
