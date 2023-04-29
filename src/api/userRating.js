import axios from 'axios';
import RequestService from '../Services/RequestService';

export const rateService = async (service_name, rating, token) => {
    try {
        const response = await RequestService.post(`/services/rating`, {
            
            service_name: service_name,
            rating: rating,
        },
        {
        headers: {
            Authorization: `Bearer `+ token,
        },
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
    const response = await RequestService.get(`/services/ratings`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};