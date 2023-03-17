import { useNavigate } from "react-router-dom";

const ListItem = ({ imgNm, like, rgDate }) => {
  const nvg = useNavigate();
  const fnMovePage = () => {
    nvg("/detail");
  };

  return (
    <div className="ListItem">
      <div className={"emotion_img_wrapper"} onClick={fnMovePage}>
        <img
          src={process.env.PUBLIC_URL + `../` + imgNm + `.png`}
          alt="이미지 불러오는 중..."
        />
      </div>
      <p className="text_area">{like}</p>
      <p className="text_area">{rgDate}</p>
    </div>
  );
};

export default ListItem;
