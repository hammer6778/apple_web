import axios from 'axios';

// 创建一个Axios实例
const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com/', 
  timeout: 10000, // 设置请求超时时间
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(
  config => {
    // 在请求发送之前做一些处理，比如添加认证token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  response => {
    // 对响应数据做一些处理
    return response;
  },
  error => {
    // 处理响应错误
    if (error.response && error.response.status === 401) {
      // 例如，如果状态码为401，重定向到登录页面
      // window.location = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
