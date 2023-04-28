import { useState, useContext } from "react";
import Header from "../components/Header";
import EnrollTemplate from "../templates/EnrollTemplate";
import { GlobalDispatchContext } from "../config/reducer";

import { useNavigate } from "react-router-dom";
import { callApi } from "../config/callApi";

const EnrollPage = () => {
  const nvg = useNavigate();
  const [itemProps, setItemProps] = useState<any>();

  const getData = (fromData) => {
    setItemProps({
      ...fromData,
    });
  };
  const fncSave = async () => {
    if (window.confirm("게시물을 등록 하시겠습니까?")) {
      try {
        const url = "/post/postSaveAPI";
        const params = itemProps.formData;
        const optConfig = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };

        const { success, data, message } = await callApi.post(
          url,
          params,
          optConfig
        );

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
          <p onClick={() => nvg("/", { replace: true })}>{"취소"}</p>
        }
        centerComponent={"새 게시물"}
        rightComponent01={<p onClick={() => fncSave()}>{"공유"}</p>}
      />
      <EnrollTemplate getData={getData}></EnrollTemplate>
    </>
  );
};

export default EnrollPage;
