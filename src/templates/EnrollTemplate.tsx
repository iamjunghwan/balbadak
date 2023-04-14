import { useEffect, useRef, useState } from "react";
import {callApi} from "../config/callApi";

const EnrollTemplate = ({getData}) => {
  const [img, setImg] = useState<string | ArrayBuffer>("");
  const [content, setContent] = useState("");
  const [obj,setObj] = useState({});
  const focus = useRef<any>();
  const imgRef = useRef<any>();
  const fncChangeVal = (content) => {
    const file: any | [] = imgRef.current.files;
    //사진 올리려다가 취소할 경우 length가 0이 되므로 예외처리
    const formData = new FormData();
    for(let i = 0; i < file.length; i++) {
      formData.append("files", file[i]);
    }
    const params = JSON.stringify({postUserId : 199 ,postContent : '테스트'});
    formData.append("content",  new Blob([params], { type: "application/json" }));

    setContent(content);
    getData({formData} );
  };



  useEffect(() => {
    focus.current.focus();
  }, []);

  const fncFileUpload = async (e: React.FormEvent<HTMLInputElement>) => {
    const file: any | [] = imgRef.current.files;
    //사진 올리려다가 취소할 경우 length가 0이 되므로 예외처리

    if (typeof file === "undefined") {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(imgRef.current.files[0]);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImg(reader.result || null);
      };
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    const formData = new FormData(e.currentTarget);

    console.log('data', formData);
  }



  return (
    <>
      <div className="enroll_area">
        <form onSubmit={onSubmit}>
        <div className="file_area">
          <section>
            <img className="img_area" src={img.toString()}></img>
          </section>
        </div>
        <section>
          <input
            id={"btnFileUpload"}
            type={"file"}
            accept="image/*"
            ref={imgRef}
            onChange={(e) => fncFileUpload(e)}
            multiple
          ></input>
        </section>
        <section>
          <textarea
            id={"text_wrapper"}
            placeholder="문구를 작성해주세요."
            ref={focus}
            onChange={(e) => {
              fncChangeVal(e.target.value);
            }}
          ></textarea>
        </section>
        </form>
      </div>
    </>
  );
};

export default EnrollTemplate;
