import { checkError, client } from './client';

export async function fetchTeams() {
  const resp = await client.from('teams').select('*');
  return checkError(resp);
}

export async function fetchTeamsId(id) {
  const resp = await client.from('teams').select('*').match({ id }).single();
  return checkError(resp);
}