import { useNavigate } from "react-router-dom";

interface ItemType {
  imgNm?: string;
  editImg?: boolean;
  like?: string;
  rgDate?: string;
  txt?: string;
}

const ListItem = ({ imgNm, editImg, like, rgDate, txt }: ItemType) => {
  const nvg = useNavigate();
  const fnMovePage = () => {
    nvg("/detail");
  };

  return (
    <div className="ListItem">
      <div className={"img_wrapper"} onClick={fnMovePage}>
        {imgNm.split(".")[1] === "png" ? (
          <img
            src={process.env.PUBLIC_URL + `../` + imgNm}
            alt="이미지 불러오는 중..."
          />
        ) : (
          <video controls muted autoPlay loop width="210" height="200">
            <source
              src={process.env.PUBLIC_URL + `../2.mp4`}
              type="video/mp4"
            />
          </video>
        )}
      </div>
      {txt && (
        <textarea rows={10} cols={30} readOnly>
          {txt}
        </textarea>
      )}
      <p className="text_area">{like}</p>
      <p className="text_area">{rgDate}</p>

      {editImg && <img src={process.env.PUBLIC_URL + `../edit.png`}></img>}
    </div>
  );
};

export default ListItem;
