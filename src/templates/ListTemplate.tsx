import { useContext, useEffect } from "react";
import ListItem from "../components/ListItem";
import {
  reducer,
  GlobalStateContext,
  GlobalDispatchContext,
} from "../config/reducer";

const ListTemplate = () => {
  const itemList = useContext<any>(GlobalStateContext);

  useEffect(() => {}, [itemList]);

  // const fncImgTransferPreview = (base64) => {
  //   const byteCharacters = atob(base64);
  //   const byteNumbers = new Array(byteCharacters.length);
  //   for (let i = 0; i < byteCharacters.length; i++) {
  //     byteNumbers[i] = byteCharacters.charCodeAt(i);
  //   }
  //   const byteArray = new Uint8Array(byteNumbers);
  //   const blob = new Blob([byteArray], { type: "image/png" });
  //   const reader = new FileReader();
  //   reader.readAsDataURL(blob);
  //   reader.onloadend = () => {
  //     setRsult(reader.result);
  //   };
  // };

  const FncSetComponentList = () => {
    if (itemList.length === 0) {
      return;
    } else {
      return itemList.map((item, idx) => (
        <ListItem
          id={idx.toString()}
          key={idx.toString()}
          imgSrc={item.itemFilePath}
          content={item.itemContent}
        ></ListItem>
      ));
    }
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
