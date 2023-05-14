import RequestService from '../Services/RequestService';

export const login = async (email, password) => {
  try {
    const response = await RequestService.post(`/auth/login`, {
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
    const response = await RequestService.post(`/auth/register`, {
      email,
      password,
      full_name: fullName,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = async (token) => {
  try {
  
    await RequestService.post(
      `/auth/logout`,
      {
        withCredentials: true // enable sending cookies with requests
      },
      {headers: { Authorization: `Bearer `+ token } });

    } catch (error) {
    throw error.response.data;
  }
};

export const getCurrentUser = async (token) => {
  try {
  
    const response = await RequestService.get(
      `/auth/user`,
      {headers: { Authorization: `Bearer `+ token } });
      
      return response.data;

    } catch (error) {
    throw error.response.data;
  }
};
