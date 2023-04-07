import { useContext, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import EditTemplate from "../templates/EditTemplate";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalStateContext, GlobalDispatchContext } from "../App";

const EditPage = () => {
  const nvg = useNavigate();
  const { id } = useParams<string>();
  const itemList = useContext<any>(GlobalStateContext);
  const onEdit = useContext<any>(GlobalDispatchContext);
  const [itemProps, setItemProps] = useState({});

  //state에 set 시킨 데이터를 id값으로 필터 하여 아래 EditTemplate 컴포넌트로 전달
  useEffect(() => {
    if (itemList.length > 1) {
      const currItem = itemList.find((item, idx) => id === idx.toString());
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

  const fncSave = () => {
    if (window.confirm("게시물을 수정 하시겠습니까?")) {
      onEdit(itemList.id, itemList.itemContent);
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
      <EditTemplate itemProps={itemProps}></EditTemplate>
    </>
  );
};

export default EditPage;
