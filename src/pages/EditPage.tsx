import { useContext, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import EditTemplate from "../templates/EditTemplate";
import { useNavigate, useParams } from "react-router-dom";
import {
  reducer,
  GlobalStateContext,
  GlobalDispatchContext,
} from "../config/reducer";
import { callApi } from "../config/callApi.js";

const EditPage = () => {
  const nvg = useNavigate();
  const { id } = useParams<string>();
  const itemList = useContext<any>(GlobalStateContext);
  const [itemProps, setItemProps] = useState({
    itemContent: "",
    itemFileId: 1,
    itemFileName: "",
    itemFilePath: "",
  });

  //state에 set 시킨 데이터를 id값으로 필터 하여 아래 EditTemplate 컴포넌트로 전달
  useEffect(() => {
    if (itemList.length > 0) {
      const currItem = itemList.find(
        (item, idx) => item.itemFileId - 1 === Number(id)
      );
      setItemProps(currItem);
    }
  }, [id, itemList]);

  const fnMovePage = (pageNm, e): void => {
    let title = e.target.innerText;
    if (title === "완료" && window.confirm(title + "하시겠습니까?")) {
      nvg(pageNm);
    }
    nvg(pageNm);
  };

  const getData = (obj) => {
    setItemProps({
      ...itemProps,
      itemFileId: obj.itemFileId,
      itemContent: obj.itemContent,
    });
  };

  const fncSave = async () => {
    if (window.confirm("게시물을 수정 하시겠습니까?")) {
      try {
        const params = {
          ...itemProps,
        };

        //리턴값이 성공이면 리스트api 다시 호출
        await callApi.post("/file/save", params);
        // call List
        nvg("/", { replace: true });
      } catch (error) {
        console.log("error : " + error);
      }
    }
  };

  return (
    <>
      <Header
        leftComponent={
          <p
            onClick={(e) => {
              fnMovePage("/", e);
            }}
          >
            {"취소"}
          </p>
        }
        centerComponent={"정보 수정"}
        rightComponent01={
          <p
            onClick={(e) => {
              fncSave();
            }}
          >
            {"완료"}
          </p>
        }
      />
      <EditTemplate itemProps={itemProps} getData={getData}></EditTemplate>
    </>
  );
};

export default EditPage;
