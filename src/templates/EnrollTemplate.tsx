import { useEffect, useRef, useState } from "react";

const EnrollTemplate = () => {
  const [img, setImg] = useState<string | ArrayBuffer>("");
  const focus = useRef<any>();
  const imgRef = useRef<any>();

  useEffect(() => {
    focus.current.focus();
  }, []);

  const fncFileUpload = (e: React.FormEvent<HTMLInputElement>) => {
    const file: any = imgRef.current.files[0];
    //사진 올리려다가 취소할 경우 length가 0이 되므로 예외처리
    if (typeof file === "undefined") {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImg(reader.result || null);
      };
    });
  };

  return (
    <>
      <div className="enroll_area">
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
