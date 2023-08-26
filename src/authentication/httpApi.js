import axios from 'axios'
import { readLocalStorage } from './localStorageService'

const httpApi = axios.create({
  baseURL: 'https://anhkiet-001-site1.htempurl.com/api',
})

httpApi.interceptors.request.use((config) => {
  const token = readLocalStorage('token')
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    }
  }

  console.log('Authorization:', config.headers.Authorization)
  return config
})

export default httpApi
