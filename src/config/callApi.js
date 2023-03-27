import axios from "axios";

export async function callApi(url, params) {
  const resp = await axios(url, params);

  return new Promise(function(resolve, reject) {
    if (resp) resolve(resp.data);
    else reject(Error("param이 없습니다."));
  });
}
