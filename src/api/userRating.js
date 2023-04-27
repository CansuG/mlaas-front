import axios from 'axios';

const baseUrl = 'http://127.0.0.1:5000';

export const rateService = async (service_name, rating) => {
  try {
    const response = await axios.post(`${baseUrl}/service/rating`, {
      service_name,
      rating,
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getRatings = async () => {
  try {
    const response = await axios.get(`${baseUrl}/service/ratings`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};