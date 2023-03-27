import ListItem from "../components/ListItem";
import axios from "axios";
import { BACK_END_SERVER_URL } from "../config/config.js";
import { callApi } from "../config/callApi.js";
import { json } from "react-router-dom";
import { useEffect, useState } from "react";
//axios.defaults.withCredentials = true;

const ListTemplate = () => {
  const [apiData, setApiData] = useState("");

  useEffect(() => {
    const data = callApi("https://jsonplaceholder.typicode.com/users");
    data
      .then(response => {
        console.log("성공");
        setApiData(JSON.stringify(response));
      })
      .catch(error => {
        console.log("error");
        console.log(error);
      });
  }, []);

  console.log(BACK_END_SERVER_URL);

  const options = {
    url: "http://172.31.99.98:8070/test/testAPI",
    method: "POST",
    header: {
      "Access-Control-Allow-Headers": "Content-Type"
    },
    // withCredentials: true,
    data: {
      name: "sewon",
      age: 20
    }
  };
  // const getData = axios(options).then(response => console.log(response.data));

  const itemList = [
    { imgNm: `background.png` },
    { imgNm: "lake.png" },
    { imgNm: `background.png` },
    { imgNm: "lake.png" },
    { imgNm: `background.png` },
    { imgNm: `2.mp4` }
  ];

  const FncSetComponentList = () => {
    return itemList.map((item, idx) => (
      <ListItem
        id={idx.toString()}
        key={idx.toString()}
        imgNm={item.imgNm}
      ></ListItem>
    ));
  };

  return (
    <>
      <div className="List_area">
        <div className="menu_wrapper">
          <div className="menu_col">
            <div className="img_item">
              <img
                src={process.env.PUBLIC_URL + `../hamburger.png`}
                alt={`로딩중...`}
              ></img>
            </div>

            <div className="img_item">
              <img
                src={process.env.PUBLIC_URL + `../like.png`}
                alt={`로딩중...`}
              ></img>
            </div>

            <div className="img_item">
              <img
                src={process.env.PUBLIC_URL + `../joy.png`}
                alt={`로딩중...`}
              ></img>
            </div>
            <div>{}</div>
          </div>
        </div>
        <div className="ListItem_area">{FncSetComponentList()}</div>
      </div>
    </>
  );
};

export default ListTemplate;
