import Header from "../components/Header";
import Button from "../components/Button";
import ListTemplate from "../templates/ListTemplate";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const nvg = useNavigate();

  const fnMovePage = async () => {
    nvg("/enroll");
  };

  return (
    <>
      <Header
        centerComponent={"게시물"}
        rightComponent01={
          <Button
            src={process.env.PUBLIC_URL + `../newCreate.png`}
            onClick={fnMovePage}
          />
        }
      />

      <ListTemplate />
    </>
  );
};

export default Main;
