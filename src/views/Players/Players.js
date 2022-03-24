import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPlayers } from '../../services/players';

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playersData = await fetchPlayers();
        setPlayers(playersData);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);


  return (
    <div>
      <h1>Players</h1>
      {error && <p>{error}</p>}
      <ul className="players-list">
        {players.map((player) => (
          <Link key={player.id} to={`./${player.id}`} >
            <li key={player.id}>{player.name}</li>
          </Link>
        ))}
      </ul> 
    </div>
  );
}
