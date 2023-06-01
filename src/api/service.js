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

export const generateText = async (text) => {
  try {
      const response = await RequestService.post(`/services/generate_text`, { text });
      return response.data[0].generated_text;
  } catch (error) {
      throw error.response.data;
  }
};

export const russianToEnglishTranslator = async (text) => {
  try {
      const response = await RequestService.post(`/services/ru-en-translation`, { text });
      return response.data[0].translation_text;
  } catch (error) {
      throw error.response.data;
  }
};

export const findLabel = (text, candidate_labels) => {
  try { 
      const response = RequestService.post(`/services/zero-shot-classification`, { text, candidate_labels });
      return response.data;
  } catch (error) {             
      throw error.response.data;
  }     
};

export const textToTextGeneration = async (text) => {
  try {
      const response = await RequestService.post(`/services/text-2-text-generation`, { text });
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