import axios from 'axios';

const parseParams = (params) => {
  const keys = Object.keys(params);
  let options = '';

  keys.forEach((key) => {
    const isParamTypeObject = typeof params[key] === 'object';
    const isParamTypeArray = isParamTypeObject && Array.isArray(params[key]) && params[key].length >= 0;

    if (!isParamTypeObject) {
      options += `${key}=${params[key]}&`;
    }

    if (isParamTypeObject && isParamTypeArray) {
      params[key].forEach((element) => {
        options += `${key}=${element}&`;
      });
    }
  });

  return options ? options.slice(0, -1) : options;
};

const baseURL = 'http://anhkiet-001-site1.htempurl.com/api/';

const axiosInstance = axios.create({
  baseURL,
  paramsSerializer: parseParams,
});

axiosInstance.interceptors.request.use((options) => {
  const { method } = options;

  if (method === 'put' || method === 'post') {
    Object.assign(options.headers, {
      'Content-Type': 'application/json;charset=UTF-8',
    });
  }

  return options;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Có lỗi xảy ra'),
);

export default axiosInstance;
