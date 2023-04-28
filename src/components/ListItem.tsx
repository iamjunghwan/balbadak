import { useNavigate } from "react-router-dom";
interface ItemType {
  id: string;
  imgSrc?: string;
  editImg?: boolean;
  like?: string;
  createDt?: string;
  postContent?: string;
}

const ListItem = ({
  id,
  imgSrc,
  editImg,
  like,
  createDt,
  postContent,
}: ItemType) => {
  const nvg = useNavigate();

  const fnMovePage = (pageNm, e) => {
    nvg(`/edit/${id}`);
  };

  return (
    <div className="ListItem" id={id}>
      <div
        className={"img_wrapper"}
        onClick={(e) => {
          fnMovePage("/detail", e);
        }}
      >
        {imgSrc ? (
          <img src={imgSrc} alt="thumbnail" draggable="false" />
        ) : (
          <video controls muted autoPlay loop width="210" height="200">
            <source
              src={process.env.PUBLIC_URL + `../12.mp4`}
              type="video/mp4"
            />
          </video>
        )}
      </div>
      <p className="text_area">{like}</p>
      <p className="text_area">{createDt}</p>
      {/* {content && (
        <>
          <textarea rows={10} cols={30} readOnly value={content}></textarea>
        </>
      )} */}

      {editImg && (
        <div
          className={"img_wrapper"}
          onClick={(e) => {
            fnMovePage("/edit", e);
          }}
        >
          <img
            src={process.env.PUBLIC_URL + `../edit.png`}
            alt={"로딩중..."}
          ></img>
        </div>
      )}
    </div>
  );
};

export default ListItem;
