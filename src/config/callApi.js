import axios from "axios";

export async function callApi(url, params) {
  const res = await axios(url, params);

  return new Promise((resolve, reject) => {
    if (res) {
      resolve(res.data);
    } else {
      reject(Error("param이 없습니다."));
    }
  });
}
