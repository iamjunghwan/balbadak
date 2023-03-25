import Header from "../components/Header";
import Button from "../components/Button";
import EnrollTemplate from "../templates/EnrollTemplate";

import { useNavigate } from "react-router-dom";

const EnrollPage = () => {
  const nvg = useNavigate();
  const fnMovePage = () => {
    nvg("/enroll");
  };

  return (
    <>
      <Header
        leftComponent={
          <Button
            src={process.env.PUBLIC_URL + `../cancle.png`}
            onClick={() => nvg(-1)}
          />
        }
        centerComponent={"새 게시물"}
        rightComponent01={
          <p onClick={() => fnMovePage("/")}>{"공유"}</p>
          // <Button
          //   src={process.env.PUBLIC_URL + `../newCreate.png`}
          //   onClick={fnMovePage}
          // />
        }
      />
      <EnrollTemplate></EnrollTemplate>
    </>
  );
};

export default EnrollPage;
