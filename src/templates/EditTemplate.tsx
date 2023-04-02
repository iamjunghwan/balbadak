import { useEffect, useRef, useState } from "react";

import { useParams } from "react-router-dom";
const EditTemplate = () => {
  //file : File , thum : String , type : String
  const [img, setimg] = useState(null);
  const focus = useRef<any>();

  useEffect(() => {
    focus.current.focus();
  }, []);

  const fncFileUpload = e => {
    //e.preventDefault();
    const _file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(_file);

    return new Promise<void>(resolve => {
      reader.onload = () => {
        setimg(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };

  return (
    <>
      <div className="Deatail_area">
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
          ></textarea>
        </section>
      </div>
    </>
  );
};

export default EditTemplate;
