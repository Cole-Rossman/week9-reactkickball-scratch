import { checkError, client } from './client';

export async function fetchTeams() {
  const resp = await client.from('teams').select('*');
  return checkError(resp);
}