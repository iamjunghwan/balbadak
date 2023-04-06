import Header from "../components/Header";
import EnrollTemplate from "../templates/EnrollTemplate";

import { useNavigate } from "react-router-dom";

const EnrollPage = () => {
  const nvg = useNavigate();
  const fnMovePage = (page) => {
    nvg(page, { replace: true });
  };

  return (
    <>
      <Header
        leftComponent={
          <p onClick={() => nvg(-1, { replace: true })}>{"취소"}</p>
        }
        centerComponent={"새 게시물"}
        rightComponent01={<p onClick={() => fnMovePage("/")}>{"공유"}</p>}
      />
      <EnrollTemplate></EnrollTemplate>
    </>
  );
};

export default EnrollPage;
