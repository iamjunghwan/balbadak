import axios from "axios";

const callApi = axios.create({
  baseURL: "http://10.10.76.199:8070", //"http://10.10.76.200:8070",
  headers: {
    "Content-Type": "multipart/form-data",
  },
  timeout: 30000,
});

callApi.interceptors.request.use(
  (config) => {
    try {
      return config;
    } catch (error) {
      console.error("request -> config Error : " + error.error);
    }
  },
  (error) => {
    try {
      return Promise.reject(error);
    } catch (error) {
      console.error("request -> error Error : " + error.error);
    }
  }
);

callApi.interceptors.response.use(
  (response) => {
    try {
      if (response.status === 200) {
        return Promise.resolve(response.data);
      } else if (response.status === 404) {
        console.log("404 Error");
      }
    } catch (error) {
      console.error("response -> response Error : " + error.error);
    }
  },

  (error) => {
    try {
      const stateError = error.response.status;
      if (stateError === 500) {
        console.log("서버 오류가 발생하였습니다.");
      }
      return Promise.reject(error);
    } catch (error) {
      console.error("response -> error Error : " + error.error);
    }
  }
);

export { callApi };
