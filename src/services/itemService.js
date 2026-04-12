import api from './api';

// Get ALL items reported by the logged-in user
export const getMyItems = async () => {
  const response = await api.get('/api/items/');
  return response.data;
};

// Report a new lost OR found item
// itemData is a FormData object because it includes an image
export const reportItem = async (itemData) => {
  const response = await api.post('/api/items/', itemData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

// Get matches for a specific item (ML results from Django)
export const getMatches = async (itemId) => {
  const response = await api.get(`/api/items/${itemId}/matches/`);
  return response.data;
};

// Get ALL matches for the logged-in user
export const getAllMatches = async () => {
  const response = await api.get('/api/matches/');
  return response.data;
};

// Delete a reported item
export const deleteItem = async (itemId) => {
  const response = await api.delete(`/api/items/${itemId}/`);
  return response.data;
};