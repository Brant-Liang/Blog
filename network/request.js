import axios from 'axios'

export const request = (config) => {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:7001',
    timeout: '7000'
  })
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log(err);
  })
  instance.interceptors.response(res => {
    return res.data;
  }, err => {
    console.log(err);
  })
  return instance(config);
}