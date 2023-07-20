import axios from './../utils/axios'

const API_BASE_URL = "http://anhkiet-001-site1.htempurl.com/api/Accounts/";
// const API_BASE_URL = `${baseURL}/Accounts/`;

const handleSuccess = (response) => {
  return {
    status: response.status,
    data: response.data,
  };
};

const handleBadRequest = (error) => {
  return {
    status: error.response?.status,
    error: error.response?.data,
  };
};

const handleServerError = (error) => {
  return {
    status: error.response?.status,
    error: "Server Error",
  };
};

// GET /signin-google
export const signInWithGoogle = () => {
  return axios.get(`${API_BASE_URL}signin-google`);
};

// GET /callback
export const callback = () => {
  return axios.get(`${API_BASE_URL}callback`);
};

// POST /register
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}register`, userData);
    console.log('sign up',response);
    // return handleSuccess(response);
  } catch (error) {
    return handleBadRequest(error);
  }
};

// POST /login
export const login = async (username, password) => {

  const credentials = {
    username: username,
    password: password,
  };

  try {
    const response = await axios.post(`${API_BASE_URL}login`, credentials);
    console.log(response.data.data);
    return handleSuccess(response.data);
  } catch (error) {
    return handleBadRequest(error);
  }
};

// POST /refreshtoken
export const refreshToken = async (refreshToken) => {
  try {
    const response = await axios.post(`${API_BASE_URL}refreshtoken`, {
      refreshToken,
    });
    return handleSuccess(response);
  } catch (error) {
    return handleServerError(error);
  }
};
