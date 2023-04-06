import axios from "axios";

const callApi = axios.create({
  baseURL: "http://10.10.76.199:8070",
  //responseType: "blob",
  "Content-Type": "multipart/form-data",
  timeout: 1000,
});

callApi.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

callApi.interceptors.response.use(
  function (response) {
    if (response.status === 200) {
      return Promise.resolve(response.data);
    }
  },

  function (error) {
    return Promise.reject(error);
  }
);

export { callApi };
