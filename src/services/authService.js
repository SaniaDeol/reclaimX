import api from './api';

// Register a new user
// formData is used because the backend accepts a profile picture (file upload)
export const registerUser = async (formData) => {
  const response = await api.post('/api/register/', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

// Login an existing user
export const loginUser = async (username, password) => {
  const response = await api.post('/api/login/', { username, password });
  return response.data;
};

// Get the currently logged-in user's profile
export const getProfile = async () => {
  const response = await api.get('/api/profile/');
  return response.data;
};