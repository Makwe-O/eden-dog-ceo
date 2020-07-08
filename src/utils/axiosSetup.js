import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: 'https://dog.ceo/api',
});

export const makeRequest = (url, options = { method: 'GET' }) => {
  return apiInstance({
    url,
    method: options.method,
    data: options.body,
    params: options.params,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
  }).then((response) => response.data);
};
