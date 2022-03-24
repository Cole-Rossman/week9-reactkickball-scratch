import { client, checkError } from './client';

export async function fetchPlayers() {
  const resp = await client.from('players').select('*');
  return checkError(resp);
}

export async function fetchPlayersId(id) {
  const resp = await client.from('players').select('*, teams (*)').match({ id }).single();
  return checkError(resp);
} 