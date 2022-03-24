import React, { useEffect, useState } from 'react';
import { fetchTeamsId } from '../../services/teams';
import { useParams, Link } from 'react-router-dom';

export default function TeamDetail() {
  const params = useParams();

  const [team, setTeam] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {  
        const teamData = await fetchTeamsId(params.id);
        setTeam(teamData);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, [params.id]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className='team'>
      {error && <p>{error}</p>}
      <h1>{team.name}</h1>
      <h3>City: {team.city}</h3>
      {team.players.map((player) => (
        <Link key={player.id} to={`/players/${player.id}`} >
          <p key={player.id}>{player.name}</p>  
        </Link>
      ))}
    </div>
  );
}
