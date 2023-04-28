import Header from "../components/Header";
import Button from "../components/Button";

import { useNavigate } from "react-router-dom";
import ListItem from "../components/ListItem";
import DetailTemplate from "../templates/DetailTemplate";

const DetailPage = () => {
  const nvg = useNavigate();
  const fnMovePage = () => {
    nvg("/enroll");
  };
  return (
    <>
      {" "}
      <div>
        <Header
          leftComponent={
            <Button
              src={process.env.PUBLIC_URL + `../cancle.png`}
              onClick={() => nvg(-1)}
            />
          }
          centerComponent={"게시물 상세"}
        />
      </div>
      <div></div>
    </>
  );
};

export default DetailPage;
