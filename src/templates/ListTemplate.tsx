import { useContext, useEffect } from "react";
import { GlobalStateContext, GlobalDispatchContext } from "@/config/reducer";
import { callApi } from "@/config/callApi";
import ListItem from "@/components/ListItem";

const ListTemplate = () => {
  const itemList = useContext<any>(GlobalStateContext);
  const { dispatch } = useContext<any>(GlobalDispatchContext);

  useEffect(() => {
    fncItemlist();
  }, []);

  const fncItemlist = async () => {
    try {
      const url = "/post/postFetchAPI";
      const { success, data } = await callApi.get(url);
      if (success && data) {
        dispatch({ type: "INIT", data: data });
        //FncSetComponentList();
      }
    } catch (error) {
      console.error("error : " + error);
    }
  };

  const FncSetComponentList = () => {
    if (itemList.length > 0) {
      return itemList.map((item, idx) => (
        <ListItem
          id={item.postId.toString()}
          key={item.postId.toString()}
          imgSrc={item.files}
          postContent={item.postContent}
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
        <div className="ListItem_area">{itemList && FncSetComponentList()}</div>
      </div>
    </>
  );
};

export default ListTemplate;
