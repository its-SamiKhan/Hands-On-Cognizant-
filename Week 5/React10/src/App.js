import React from 'react';
import './App.css';

const element = "Office Space";

const offices = [
  { Name: "DBS", Rent: 50000, Address: "Chennai", Photo: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80" },
  { Name: "Smartworks", Rent: 65000, Address: "Bangalore", Photo: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80" },
  { Name: "Regus", Rent: 55000, Address: "Delhi", Photo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=400&q=80" }
];

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>{element} , at Affordable Range</h1>
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginTop: '20px' }}>
        {offices.map((office, index) => {
          let colors = [];
          if (office.Rent <= 60000) {
            colors.push('textRed');
          } else {
            colors.push('textGreen');
          }
          
          const jsxatt = <img src={office.Photo} width="25%" height="25%" alt="Office Space" style={{ minWidth: '150px', display: 'block', margin: '10px 0' }} />;

          return (
            <div key={index} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', width: '320px' }}>
              {jsxatt}
              <h1>Name: {office.Name}</h1>
              <h3 className={colors.join(' ')}>Rent: Rs. {office.Rent}</h3>
              <h3>Address: {office.Address}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

