/* eslint-disable no-useless-catch */
import { createContext, useEffect, useState } from 'react';
import axios from '../config/axios';
import { addAccessToken, getAccessToken } from '../utils/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(getAccessToken());

  useEffect(() => {
    if (getAccessToken()) {
      axios.get('/auth/me').then((res) => setAuthUser(res.data.user));
    }
  }, []);

  const signUp = async (inputObject) => {
    const res = await axios.post('/auth/sign-up', inputObject);
    addAccessToken(res.data.accessToken);
    // setAuthUser(res.data.user);
  };

  const login = async (inputObject) => {
    try {
      const res = await axios.post('/auth/login', inputObject);
      addAccessToken(res.data.accessToken);
      // setAuthUser(res.data.user);
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ authUser, signUp, login }}>
      {children}
    </AuthContext.Provider>
  );
}
