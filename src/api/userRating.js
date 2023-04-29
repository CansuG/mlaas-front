import axios from 'axios';

const baseUrl = 'http://127.0.0.1:5000/services';

export const rateService = async (service_name, rating, token) => {
    try {
        const response = await fetch(`${baseUrl}/rating`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
           Authorization: `Bearer `+ token,
        },
        body: JSON.stringify({
          service_name: service_name,
          rating: rating,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        console.log(data.message)
        throw new Error(data.message || 'Something went wrong');
      }
      return data;
    } catch (error) {
      throw error.message || 'Something went wrong';
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