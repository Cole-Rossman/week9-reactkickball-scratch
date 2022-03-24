import React, { useEffect, useState } from 'react';
import { fetchTeams } from '../../services/teams';
import { Link } from 'react-router-dom';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamsData = await fetchTeams();
        setTeams(teamsData);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      {error && <p>{error}</p>}
      <ul className='team-list'>
        {teams.map((team) => (
          <Link key={team.id} to={`/teams/${team.id}`} >
            <li key={team.id}>{team.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
