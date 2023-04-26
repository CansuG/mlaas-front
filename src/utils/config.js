const API_ROOT = 'http://localhost:5000';

export const API_ENDPOINTS = {
  LOGIN: `${API_ROOT}/login`,
  REGISTER: `${API_ROOT}/register`,
  PROFILE: `${API_ROOT}/profile`,
  SERVICES: `${API_ROOT}/services`,
  SERVICE: (id) => `${API_ROOT}/services/${id}`,
  CREATE_SERVICE: `${API_ROOT}/services/create`,
  RATE_SERVICE: (id) => `${API_ROOT}/services/${id}/rate`,
};