import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchPlayersId } from '../../services/players';

export default function PlayerDetail() {
  const params = useParams();

  const [player, setPlayer] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playerData = await fetchPlayersId(params.id);
        console.log(playerData);
        setPlayer(playerData);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, [params.id]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className='player'>
      {error && <p>{error}</p>}
      <h1>{player.name}</h1>
      <p>
        {player.position} for the {player.teams.name}
      </p>
    </div>
  );
}
