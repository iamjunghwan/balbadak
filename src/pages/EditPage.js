import Header from "../components/Header";
import Button from "../components/Button";
import EnrollTemplate from "../templates/EnrollTemplate";
import { useNavigate } from "react-router-dom";

const EditPage = () => {
  const nvg = useNavigate();
  const fnMovePage = (pageNm) => {
    if (window.confirm("등록 하시겠습니까?")) {
      nvg(pageNm);
    }
  };

  return (
    <>
      <Header
        leftComponent={<p onClick={() => fnMovePage("/")}>{"취소"}</p>}
        centerComponent={"정보 수정"}
        rightComponent01={<p onClick={() => fnMovePage("/")}>{"완료"}</p>}
      />
      <EnrollTemplate></EnrollTemplate>
    </>
  );
};

export default EditPage;
