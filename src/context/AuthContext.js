import React, { createContext, useState, useContext } from 'react';

// Step 1: Create the shared notebook
const AuthContext = createContext();

// Step 2: The "Provider" wraps the whole app and gives everyone access
export function AuthProvider({ children }) {

  // This stores the logged-in user's info (null means not logged in)
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  // This stores the token Django gives us after login
  const [token, setToken] = useState(
    localStorage.getItem('token') || null
  );

  // Called when user logs in successfully
  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', authToken);
  };

  // Called when user clicks logout
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Step 3: A shortcut hook so any page can use it with one line
export function useAuth() {
  return useContext(AuthContext);
}