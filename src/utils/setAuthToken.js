import axios from 'axios';
import { setTokens, getTokens } from './localStorage';

const setAuthToken = () => {
  axios.interceptors.request.use((config) => {
    const { token } = getTokens();
    if (token) {
      config.headers.Authorization = `bearer ${token}`;
    } else {
      // Delete auth header
      delete config.headers.Authorization;
    }
    return config;
  });

  axios.interceptors.response.use(
    (config) => {
      return config;
    },
    (error) => {
      const { refreshToken } = getTokens();
      const originalRequest = error.config;

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        return axios
          .post(`${process.env.REACT_APP_API_URL}/auth/token`, {
            refreshToken: refreshToken,
          })
          .then((res) => {
            console.log(res);
            if (res.status === 201) {
              setTokens(res.data);

              return axios(originalRequest);
            }
          });
      }
    }
  );
};

export default setAuthToken;
