import axios from 'axios';

const baseUrl = 'http://127.0.0.1:5000/auth';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, {
      email,
      password,
    },{
      withCredentials: true // enable sending cookies with requests
    });
    
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (email, password, fullName) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, {
      email,
      password,
      full_name: fullName,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = async () => {
  try {
  
    await axios.post(
      `${baseUrl}/logout`,
      {headers: { Authorization: `Bearer `+ localStorage.getItem('access_token') } });
      
      localStorage.removeItem('access_token')

    } catch (error) {
    throw error.response.data;
  }
};
