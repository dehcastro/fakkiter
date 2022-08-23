import axios, {AxiosInstance} from 'axios';

export const api = axios.create({
  baseURL: 'https://stark-falls-35563.herokuapp.com/api',
});

export const apiConn = (): AxiosInstance => {
  return api;
};
