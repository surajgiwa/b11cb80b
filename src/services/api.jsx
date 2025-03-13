import axios from 'axios';

const BASE_URL = 'https://aircall-api.onrender.com';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchCalls = async () => {
  try {
    const response = await api.get('/activities');
    return response.data.map(call => ({
      id: call.id,
      date: new Date(call.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      from: call.from,
      to: call.to,
      via: call.via,
      time: new Date(call.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    }));
  } catch (error) {
    console.error('Error fetching calls:', error);
    return [];
  }
};