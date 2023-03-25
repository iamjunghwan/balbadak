import Header from "../components/Header";
import Button from "../components/Button";
import ListTemplate from "../templates/ListTemplate";

import { useNavigate } from "react-router-dom";

const Main = () => {
  const nvg = useNavigate();
  const fnMovePage = async () => {
    nvg("/enroll");
    /* console.log("호출 전");
    const getData = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then(function (res) {
      return res.json();
    });

    console.log(getData);
    console.log("호출 후");
    */
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
