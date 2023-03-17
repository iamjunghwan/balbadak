import Header from "../components/Header";
import Button from "../components/Button";

import { useNavigate } from "react-router-dom";

const EnrollPage = () => {
  const nvg = useNavigate();
  const fnMovePage = () => {
    nvg("/enroll");
  };

  return (
    <div>
      <Header
        leftComponent={
          <Button
            src={process.env.PUBLIC_URL + `../cancle.png`}
            onClick={() => nvg(-1)}
          />
        }
        centerComponent={"새 게시물"}
        rightComponent01={
          <Button
            src={process.env.PUBLIC_URL + `../newCreate.png`}
            onClick={fnMovePage}
          />
        }
      />
    </div>
  );
};

export default EnrollPage;
