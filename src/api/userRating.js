import axios from 'axios';

const baseUrl = 'http://127.0.0.1:5000/services';

export const rateService = async (service_name, rating, token) => {
  try {
    const response = await axios.post(`${baseUrl}/rating`, {
      service_name,
      rating,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getRatings = async () => {
  try {
    const response = await axios.get(`${baseUrl}/ratings`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};