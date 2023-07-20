import axios from 'axios';

const API_BASE_URL = 'http://anhkiet-001-site1.htempurl.com/api/Users';

export const getUsers = () => {
  return axios.get(`${API_BASE_URL}`);
};

export const getUsersBySchoolName = (schoolName) => {
  return axios.get(`${API_BASE_URL}/users/listUser-schoolname?schoolname=${schoolName}`);
};

export const getUserById = (userId) => {
  return axios.get(`${API_BASE_URL}/${userId}`);
};

export const updateUser = (userId, userData) => {
  return axios.put(`${API_BASE_URL}/${userId}`, userData);
};

export const getUserByEmail = (email) => {
  return axios.get(`${API_BASE_URL}/email/${email}`);
};

export const getUserByUserName = (userName) => {
  return axios.get(`${API_BASE_URL}/user/${userName}`);
};

export const getUserByUserNameAndPassword = (username, password) => {
  return axios.get(`${API_BASE_URL}/user/${username}/${password}`);
};

export const getUserPagination = () => {
  return axios.get(`${API_BASE_URL}/user/pagination`);
};
