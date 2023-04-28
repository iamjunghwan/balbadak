import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const EditTemplate = ({ itemProps, getData }) => {
  const focus = useRef<any>();
  const { id } = useParams<string>();
  const [content, setContent] = useState("");

  useEffect(() => {
    focus.current.focus();
    setContent(itemProps.postContent);
  }, [itemProps]);

  const fncChangeVal = (content) => {
    getData({
      postId: id,
      postContent: content,
      postLike: 3,
      postUserId: 200,
    });
    setContent(content);
  };

  return (
    <>
      <div className="edit_area">
        <div className="file_area">
          <section>
            <img className="img_area" src={itemProps.filePath}></img>
          </section>
        </div>
        <section>
          <p className="dateText">{itemProps.createDt}</p>
        </section>
        <section>
          <textarea
            placeholder="문구를 작성해주세요."
            ref={focus}
            defaultValue={content}
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
