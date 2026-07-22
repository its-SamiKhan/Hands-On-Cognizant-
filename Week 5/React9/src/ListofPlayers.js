import React from 'react';

export function ListofPlayers({ players }) {
  return (
    <ul>
      {players.map((item, index) => (
        <li key={index}>
          Mr. {item.name} <span> {item.score} </span>
        </li>
      ))}
    </ul>
  );
}

export function Scorebelow70({ players }) {
  const players70 = [];
  players.map((item) => {
    if (item.score <= 70) {
      players70.push(item);
    }
    return null;
  });

  return (
    <ul>
      {players70.map((item, index) => (
        <li key={index}>
          Mr. {item.name} <span> {item.score} </span>
        </li>
      ))}
    </ul>
  );
}
