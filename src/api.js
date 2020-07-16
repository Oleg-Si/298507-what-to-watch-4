import axios from 'axios';
import {APIErrorsCode} from './constants';

const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/wtw`,
    timeout: 5000, // ms
    withCredentials: true
  });

  const onSucces = (response) => response;

  const onError = (err) => {
    const {response} = err;

    if (response.status === APIErrorsCode.UNAUTHORIZED) {
      onUnauthorized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSucces, onError);

  return api;
};

export default createAPI;
