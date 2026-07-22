import React from 'react';
import { ListofPlayers, Scorebelow70 } from './ListofPlayers';
import { OddPlayers, EvenPlayers, IndianPlayers } from './IndianPlayers';

const players = [
  { name: "Jack", score: 50 },
  { name: "Michael", score: 70 },
  { name: "John", score: 40 },
  { name: "Ann", score: 61 },
  { name: "Elisabeth", score: 61 },
  { name: "Sachin", score: 95 },
  { name: "Dhoni", score: 100 },
  { name: "Virat", score: 84 },
  { name: "Jadeja", score: 64 },
  { name: "Raina", score: 75 },
  { name: "Rohit", score: 80 }
];

const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Ruvang5', 'Raina6'];

function App() {
  const flag = true; // Set to true or false to change the view

  if (flag === true) {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Odd Players</h1>
        {OddPlayers(IndianTeam)}
        <hr />
        <h1>Even Players</h1>
        {EvenPlayers(IndianTeam)}
        <hr />
        <h1>List of Indian Players Merged:</h1>
        <ul>
          {IndianPlayers.map((player, index) => (
            <li key={index}>Mr. {player}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

