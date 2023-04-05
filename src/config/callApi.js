import axios from "axios";

const callApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
});

callApi.interceptors.request.use(
  function (config) {
    console.log("요청 바로 직전");
    console.log(config);
    console.log("요청 바로 직전");

    return config;
  },
  function (error) {
    console.log(" 요청 에러 처리를 작성합니다");
    return Promise.reject(error);
  }
);

callApi.interceptors.response.use(
  function (response) {
    console.log(" 응답 후 ");
    if (response.status === 200) {
      return response.data;
    }
  },

  function (error) {
    console.log(" 응답 에러 처리 ");
    return Promise.reject(error);
  }
);

export { callApi };
