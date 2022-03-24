import React, { useEffect, useState } from 'react';
import { fetchTeamsId } from '../../services/teams';
import { useParams, Link } from 'react-router-dom';
import PlayerDetail from '../Players/PlayerDetail';

export default function TeamDetail() {
  const params = useParams();

  const [team, setTeam] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {  
        const teamData = await fetchTeamsId(params.id);
        setTeam(teamData);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, [params.id]);


  return (
    <div className='team'>
      {error && <p>{error}</p>}
      <h1>{team.name}</h1>
      <h3>{team.city}</h3>
      <Link key={team.team_id} to={`/players/${team.team_id}`} >
        <PlayerDetail />
      </Link>
    </div>
  );
}
