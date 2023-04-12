import { useEffect, useRef, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  reducer,
  GlobalStateContext,
  GlobalDispatchContext,
} from "../config/reducer";

const EditTemplate = ({ itemProps, getData }) => {
  const focus = useRef<any>();
  const { id } = useParams<string>();
  const [content, setContent] = useState("");
  const itemList = useContext<any>(GlobalStateContext);
  const { onInit } = useContext<any>(GlobalDispatchContext);

  useEffect(() => {
    focus.current.focus();
    setContent(itemProps.itemContent);
  }, [itemProps]);

  const fncChangeVal = (content) => {
    setContent(content);
    getData({ itemFileId: itemProps.itemFileId, itemContent: content });
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
              fncChangeVal(e.target.value);
            }}
          ></textarea>
        </section>
      </div>
    </>
  );
};

export default EditTemplate;
