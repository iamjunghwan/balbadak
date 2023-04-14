import Header from "../components/Header";
import EnrollTemplate from "../templates/EnrollTemplate";
import  { reducer} from "../config/reducer";

import { useNavigate } from "react-router-dom";
import {callApi} from "../config/callApi";
import {useReducer, useState} from "react";

const EnrollPage = () => {
  const nvg = useNavigate();
    const [items, dispatch] = useReducer(reducer, []);

    const [itemProps, setItemProps] = useState();
  const fnMovePage = (page) => {
    nvg(page, { replace: true });
  };
    const getData = (fromData) => {
        setItemProps({
            ...fromData
        });
    };
    const fncSave = async () => {
        if (window.confirm("게시물을 등록 하시겠습니까?")) {
            try {
                //리턴값이 성공이면 리스트api 다시 호출
               const {result} = await callApi.post("/post/postSaveAPI", itemProps.formData).then((response) => {

                 dispatch({ type: "INIT", data: response });
               }).catch(err => console.log(err));
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
          <p onClick={() => nvg(-1, { replace: true })}>{"취소"}</p>
        }
        centerComponent={"새 게시물"}
        rightComponent01={<p onClick={() =>  fncSave()}>{"공유"}</p>}
      />
      <EnrollTemplate getData={getData}>></EnrollTemplate>
    </>
  );
};

export default EnrollPage;
