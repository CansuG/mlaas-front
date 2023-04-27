import axios from 'axios';

const baseUrl = 'http://127.0.0.1:5000';

export const getServices = async () => {
    try {
      const response = await axios.get(`${baseUrl}/service`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

export const summarizeText = async (text) => {
    try {
        const response = await axios.post(`${baseUrl}/summarize`, { text });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const createService = async (name, description, model_name, model_type) => {
    try {
      const response = await axios.post(`${baseUrl}/summarizer`, {
        name,
        description,
        model_name,
        model_type,
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