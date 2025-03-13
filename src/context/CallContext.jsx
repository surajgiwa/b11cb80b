import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://aircall-api.onrender.com';

export const CallContext = createContext();

export const CallProvider = ({ children }) => {
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCalls = async () => {
    console.log('Fetching calls...'); 
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/activities`);
      setCalls(response.data);
    } catch (error) {
      console.error('Error fetching calls:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCalls();
  }, []); 

  return (
    <CallContext.Provider value={{ calls, loading, fetchCalls }}>
      {children}
    </CallContext.Provider>
  );
};