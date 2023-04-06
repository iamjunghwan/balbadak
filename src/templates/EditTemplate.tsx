import { useEffect, useRef, useState } from "react";

import { useParams } from "react-router-dom";
const EditTemplate = ({ itemProps }) => {
  //file : File , thum : String , type : String
  const [img, setimg] = useState(null);
  const focus = useRef<any>();
  const imgRef = useRef<any>();

  useEffect(() => {
    focus.current.focus();
  }, []);

  const fncFileUpload = (e) => {
    //e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setimg(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };

  return (
    <>
      <div className="edit_area">
        <div className="file_area">
          <section>
            <img className="img_area" src={img}></img>
          </section>
        </div>
        <section>
          <textarea
            id={"text_wrapper"}
            placeholder="문구를 작성해주세요."
            ref={focus}
            value={itemProps}
            onChange={() => {}} //문구 변경 시 state를 하나 선언하고 그쪽에 값을 넣어 id값을 같이 넣어 백엔드로 보낸다.
          ></textarea>
        </section>
      </div>
    </>
  );
};

export default EditTemplate;
