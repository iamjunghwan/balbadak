import axios from "axios";

const callApi = axios.create({
  baseURL: "http://10.10.76.199:8070", //"http://10.10.76.200:8070",
  //responseType: "blob",
  headers: {
    "Content-Type": "multipart/form-data",
  },
  timeout: 30000,
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
    } else if (response.status === 404) {
      console.log("404 Error");
    }
  },

  function (error) {
    return Promise.reject(error);
  }
);

export { callApi };
