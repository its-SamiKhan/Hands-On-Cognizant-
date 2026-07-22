import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(5);

  const sayHello = () => {
    alert("Hello welcome");
  };

  const handleIncrement = () => {
    setCounter(prev => prev + 1);
    sayHello();
  };

  const handleDecrement = () => {
    setCounter(prev => prev - 1);
  };

  const handleSayWelcome = (arg) => {
    alert(arg);
  };

  const handleClickOnMe = (e) => {
    console.log("Synthetic Event: ", e);
    alert("I was clicked");
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>{counter}</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '150px', marginBottom: '20px' }}>
        <button onClick={handleIncrement} style={{ padding: '6px', cursor: 'pointer' }}>Increment</button>
        <button onClick={handleDecrement} style={{ padding: '6px', cursor: 'pointer' }}>Decrement</button>
        <button onClick={() => handleSayWelcome('welcome')} style={{ padding: '6px', cursor: 'pointer' }}>Say welcome</button>
        <button onClick={handleClickOnMe} style={{ padding: '6px', cursor: 'pointer' }}>Click on me</button>
      </div>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;

