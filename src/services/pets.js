import client from '../providers/client';

export const getPets = () => {
  const api_code = process.env.REACT_APP_API_CODE;

  const response = client.get(`/pets/${api_code}`);

  return response;
};

export const postPet = data => {
  const api_code = process.env.REACT_APP_API_CODE;

  const response = client.post(`/pets/${api_code}`, data);

  return response;
};
