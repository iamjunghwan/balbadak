import { useEffect, useRef, useState } from "react";

const EnrollTemplate = () => {
  //file : File , thum : String , type : String
  const [img, setimg] = useState(null);
  const focus = useRef<any>(); //타입 any 넣지 않으면 적용 안됨.

  useEffect(() => {
    focus.current.focus();
  }, []);

  const fncFileUpload = (e) => {
    //e.preventDefault();
    const _file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(_file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setimg(reader.result || null);
        resolve();
      };
    });
  };

  return (
    <>
      <div className="Enroll_area">
        <div className="file_area">
          <section>
            <img className="img_area" src={img}></img>
          </section>
        </div>
        <section>
          <input
            id={"btnFileUpload"}
            type={"file"}
            onChange={(e) => fncFileUpload(e)}
          ></input>
        </section>
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

export default EnrollTemplate;
