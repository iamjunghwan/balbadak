import ListItem from "../components/ListItem";
import axios from "axios";
import { BACK_END_SERVER_URL } from "../config/config.js";
import { callApi } from "../config/callApi.js";
import { useEffect, useState } from "react";

//axios.defaults.withCredentials = true;

const ListTemplate = ({ data }) => {
  const [apiData, setApiData] = useState("");
  console.log("data : " + data);
  useEffect(() => {
    const data = callApi("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        //setApiData(JSON.stringify(response));
      })
      .catch(error => {
        console.log("error");
        console.log(error);
      });
    // console.log(rsult);
  }, []);

  const itemList = [
    { imgNm: `book.png` },
    { imgNm: "screen.png" },
    { imgNm: `book.png` },
    { imgNm: "screen.png" },
    { imgNm: `book.png` },
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
            <div>{apiData}</div>
          </div>
        </div>
        <div className="ListItem_area">{FncSetComponentList()}</div>
      </div>
    </>
  );
};

export default ListTemplate;
