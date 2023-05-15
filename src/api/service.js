import axios from 'axios';
import RequestService from '../Services/RequestService';

export const getServices = async () => {
    try {
      const response = await RequestService.get(`/services/services`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
};

export const classifyGender = async (formData) => {
  try {
    const response = await RequestService.post(`/services/gender_classification`,  formData );
    return response.data;
} catch (error) {
    throw error.response.data;
}
};

export const summarizeText = async (text) => {
    try {
        const response = await RequestService.post(`/services/summarize`, { text });
        return response.data.summary_text;
    } catch (error) {
        throw error.response.data;
    }
};

export const get_predicted_image = async () => {
  try {
      const response = await RequestService.get(`/services/get_predicted_image`);
      return response.data;
  } catch (error) {
      throw error.response.data;
  }
};

export const questionAnswering = async (text, question) => {
    try { 
        const response = await RequestService.post(`/services/qa`, { text, question });
        return response.data.answer;
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

export const getService = async (model_name) => {
    try{
      const response = await RequestService.get(`/services/service/${model_name}`);
      return response
    }catch (error) {
        throw error.response.data;
      }
  };