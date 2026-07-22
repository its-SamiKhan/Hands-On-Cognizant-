import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const currency = 'Euro';

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount)) {
      alert('Please enter a valid amount');
      return;
    }
    const converted = numericAmount * 80;
    alert(`Converting to Euro amount is ${converted}`);
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h2 style={{ color: 'green', fontWeight: 'bold' }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px', display: 'inline-block', width: '80px' }}>Amount:</label>
          <input 
            type="text" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            style={{ padding: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px', display: 'inline-block', width: '80px' }}>Currency:</label>
          <input 
            type="text" 
            value={currency} 
            readOnly
            style={{ padding: '4px', border: '1px solid #ccc', backgroundColor: '#f0f0f0' }}
          />
        </div>
        <button type="submit" style={{ padding: '4px 12px', cursor: 'pointer', marginLeft: '90px' }}>Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
