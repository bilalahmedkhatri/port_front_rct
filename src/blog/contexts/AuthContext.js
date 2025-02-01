import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check for stored user data on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (username, password) => {
    try {
      setError(null);
      setLoading(true);
      const response = await api.login({ username, password });
      
      setCurrentUser({
        id: response.user_id,
        username: response.username,
        email: response.email
      });
      
      return response;
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      setLoading(true);
      await api.logout();
      setCurrentUser(null);
    } catch (err) {
      console.error('Logout error:', err);
      // Still clear user data even if API call fails
      setCurrentUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return !!currentUser && !!localStorage.getItem('token');
  };

  // Get current user data
  const getCurrentUser = async () => {
    try {
      const response = await api.getCurrentUser();
      setCurrentUser(response.data);
      return response.data;
    } catch (err) {
      console.error('Error fetching user data:', err);
      return null;
    }
  };

  const value = {
    currentUser,
    loading,
    error,
    login,
    logout,
    isAuthenticated,
    getCurrentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};