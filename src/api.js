import axios from 'axios';
import {APIErrorsCode} from './constants';

const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/wtw`,
    timeout: 5000, // ms
    withCredentials: true
  });

  const onSucces = (response) => response;

  const onError = (error) => {
    const {response} = error;

    if (response.status === APIErrorsCode.UNAUTHORIZED) {
      onUnauthorized();

      throw error;
    }

    throw error;
  };

  api.interceptors.response.use(onSucces, onError);

  return api;
};

export default createAPI;
