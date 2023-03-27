import { useNavigate } from "react-router-dom";

interface ItemType {
  id: string;
  imgNm?: string;
  editImg?: boolean;
  like?: string;
  rgDate?: string;
  txt?: string;
}

const ListItem = ({ id, imgNm, editImg, like, rgDate, txt }: ItemType) => {
  const nvg = useNavigate();

  const fnMovePage = (pageNm, e) => {
    nvg(pageNm);
  };

  return (
    <div className="ListItem" id={id}>
      <a href="file:///C:/dev/abc.png" download>
        {"다운로드"}
      </a>
      <div
        className={"img_wrapper"}
        onClick={e => {
          fnMovePage("/detail", e);
        }}
      >
        {imgNm.split(".")[1] === "png" ? (
          <img
            src={process.env.PUBLIC_URL + `../` + imgNm}
            // src="C:/dev/abc.png"
            alt="이미지 불러오는 중..."
          />
        ) : (
          <video controls muted autoPlay loop width="210" height="200">
            <source
              src={process.env.PUBLIC_URL + `../12.mp4`}
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

      {editImg && (
        <div
          className={"img_wrapper"}
          onClick={e => {
            fnMovePage("/edit", e);
          }}
        >
          (
          <img
            src={process.env.PUBLIC_URL + `../edit.png`}
            alt={"로딩중..."}
          ></img>
          )
        </div>
      )}
    </div>
  );
};

export default ListItem;
