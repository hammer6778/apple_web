import axiosInstance from './axiosInstance';

// 封装API请求方法
export const fetchItems = (params = {}) => {
  return axiosInstance.get('/photos', { params });
};

export const addItem = newItem => {
  return axiosInstance.post('/items', newItem);
};

