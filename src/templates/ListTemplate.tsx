import { useContext, useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import axios from "axios";
import { BACK_END_SERVER_URL } from "../config/config.js";
import { callApi } from "../config/callApi.js";

import { GlobalDispatchContext, GlobalStateContext } from "../App.js";

//axios.defaults.withCredentials = true;

const ListTemplate = () => {
  // const { onEdit } = useContext(GlobalDispatchContext);
  const itemList = useContext<any>(GlobalStateContext);
  const [apiData, setApiData] = useState("");

  /* const itemList = [
    { imgNm: `book.png` },
    { imgNm: "screen.png" },
    { imgNm: `book.png` },
    { imgNm: "screen.png" },
    { imgNm: `book.png` },
    { imgNm: `2.mp4` },
  ];*/

  const FncSetComponentList = () => {
    /* return JSON.stringify(itemList); 

    if (itemList.length === 0) {
      return;
    } else {
      itemList.map((item, idx) => (
        <ListItem
          id={idx.toString()}
          key={idx.toString()}
          imgNm={item.imgNm}
        ></ListItem>
      ));
    }*/
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
        <div className="ListItem_area">
          {<ListItem id={"1"} key={"1"} imgNm={itemList}></ListItem>}
        </div>
      </div>
    </>
  );
};

export default ListTemplate;
