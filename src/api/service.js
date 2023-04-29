import axios from 'axios';
import RequestService from '../Services/RequestService';

export const getServices = async () => {
    try {
      const response = await RequestService.get(`/services/service`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
};

export const summarizeText = async (text) => {
    try {
        const response = await RequestService.post(`/services/summarize`, { text });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const createService = async (name, description, model_name, model_type, token) => {
    try {
      const response = await RequestService.post(`/services/summarizer`, {
        name,
        description,
        model_name,
        model_type,
      }, {
        headers: {
          Authorization: `Bearer `+ token,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };