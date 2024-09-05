import { useState } from 'react';

import './App.css';

function App() {
  const [playerLeft, setPlayerLeft] = useState('Player1');
  const [playerRight, setPlayerRight] = useState('Player2');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="layout">
      <div className="player-container player-left">
        {isEditing ? (
          <input
            type="text"
            name="player1input"
            value={playerLeft}
            onChange={(e) => setPlayerLeft(e.target.value)}
          />
        ) : (
          <Player name={playerLeft} />
        )}
        <CounterLeft />
      </div>
      {isEditing ? (
        <button
          className="cta btn-validate"
          onClick={() => setIsEditing(!isEditing)}
        >
          Valider
        </button>
      ) : (
        <button
          className="cta btn-change"
          onClick={() => setIsEditing(!isEditing)}
        >
          Modifier
        </button>
      )}
      <div className="player-container player-right">
        <CounterRight />
        {isEditing ? (
          <input
            type="text"
            name="player2input"
            value={playerRight}
            onChange={(e) => setPlayerRight(e.target.value)}
          />
        ) : (
          <Player name={playerRight} />
        )}
      </div>
    </div>
  );
}

function Player({ name }) {
  return (
    <div className="pseudo">
      <h3>{name}</h3>
    </div>
  );
}
function CounterLeft() {
  const [score, setScore] = useState(0);
  return (
    <div className="counter">
      <div className="btn-container">
        <button className="btn" onClick={() => setScore(score + 1)}>
          +
        </button>
        <button className="btn" onClick={() => setScore(score - 1)}>
          -
        </button>
      </div>
      <h2 className="score" onClick={() => setScore(0)}>
        {score}
      </h2>
    </div>
  );
}
function CounterRight() {
  const [score, setScore] = useState(0);
  return (
    <div className="counter">
      <h2 className="score" onClick={() => setScore(0)}>
        {score}
      </h2>
      <div className="btn-container">
        <div className="btn" onClick={() => setScore(score + 1)}>
          +
        </div>
        <div className="btn" onClick={() => setScore(score - 1)}>
          -
        </div>
      </div>
    </div>
  );
}

export default App;
