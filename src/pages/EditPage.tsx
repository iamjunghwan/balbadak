import { useContext, useEffect, useState } from "react";
import Header from "@/components/Header";
import EditTemplate from "@/templates/EditTemplate";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalStateContext } from "@/config/reducer";
import { callApi } from "@/config/callApi.js";

const EditPage = () => {
  const nvg = useNavigate();
  const { id } = useParams<string>();
  const itemList = useContext<any>(GlobalStateContext);
  const [itemProps, setItemProps] = useState({
    postId: id,
    postContent: "",
    postLike: 3,
    postUserId: 200,
    files: [],
    createDt: "",
  });

  //state에 set 시킨 데이터를 id값으로 필터 하여 아래 EditTemplate 컴포넌트로 전달
  useEffect(() => {
    if (itemList.length > 0) {
      const currItem = itemList.find((item, idx) => item.postId === Number(id));
      setItemProps(currItem);
    } else {
      nvg("/*", { replace: true });
    }
  }, [id, itemList]);

  const fnMovePage = (pageNm, e): void => {
    let title = e.target.innerText;
    if (title === "완료" && window.confirm(title + "하시겠습니까?")) {
      nvg(pageNm, { replace: true });
    }
    nvg(pageNm, { replace: true });
  };

  const getData = (obj) => {
    setItemProps({
      ...itemProps,
      postId: obj.postId,
      postContent: obj.postContent,
    });
  };

  const fncSave = async () => {
    if (window.confirm("게시물을 수정 하시겠습니까?")) {
      try {
        const url = "/file/FilesFetchAPI";
        const params = {
          ...itemProps,
          postUserId: 200,
        };

        const { success, data, message } = await callApi.post(url, params);

        if (success && data) {
          nvg("/", { replace: true });
        }
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
