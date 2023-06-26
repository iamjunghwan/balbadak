import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "@/components/Carousel";

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
        <div>
          <section>
            <Carousel>
              {itemProps.files.length > 0
                ? itemProps.files.map((item, idx) => (
                    <div key={idx}>
                      <img src={item.filePath} width={"100%"}></img>
                    </div>
                  ))
                : ""}
            </Carousel>
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
