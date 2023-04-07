import { useEffect, useRef, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalDispatchContext, GlobalStateContext } from "../App";

const EditTemplate = ({ itemProps }) => {
  const focus = useRef<any>();
  const { id } = useParams<string>();
  const [content, setContent] = useState("");
  const itemList = useContext<any>(GlobalStateContext);
  const { onInit } = useContext<any>(GlobalDispatchContext);

  useEffect(() => {
    focus.current.focus();
    setContent(itemProps.itemContent);
  }, [itemProps]);

  const fncChangeContent = (e) => {
    setContent(e.target.value);
    //04.07
    onInit(itemProps.id, e.target.value);
    //onEdit(itemProps.id , e.target.value);
  };

  return (
    <>
      <div className="edit_area">
        <div className="file_area">
          <section>
            <img className="img_area" src={itemProps.itemFilePath}></img>
          </section>
        </div>
        <section>
          <textarea
            id={"text_wrapper"}
            placeholder="문구를 작성해주세요."
            ref={focus}
            value={content}
            onChange={(e) => {
              fncChangeContent(e);
            }} //문구 변경 시 state를 하나 선언하고 그쪽에 값을 넣어 id값을 같이 넣어 백엔드로 보낸다.
          ></textarea>
        </section>
      </div>
    </>
  );
};

export default EditTemplate;
