import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchTeamLeaderboard() {
  try {
    const response = await axios.get(`${API_BASE_URL}/leaderboard/teams`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching team leaderboard:', error.message);
      throw new Error(`Failed to fetch team leaderboard: ${error.response?.status || error.message}`);
    }
    throw error;
  }
}

export async function fetchPlayerLeaderboard() {
  try {
    const response = await axios.get(`${API_BASE_URL}/leaderboard/players`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching player leaderboard:', error.message);
      throw new Error(`Failed to fetch player leaderboard: ${error.response?.status || error.message}`);
    }
    throw error;
  }
}