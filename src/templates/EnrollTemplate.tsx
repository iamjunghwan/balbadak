import { useEffect, useRef, useState } from "react";
import imageCompression from "browser-image-compression";

const EnrollTemplate = ({ getData }) => {
  const [img, setImg] = useState<string | ArrayBuffer>("");
  const focus = useRef<any>();
  const imgRef = useRef<any>();
  const [custImg, setCustImg] = useState<any>([]);

  const fncChangeVal = (content: string) => {
    const file: any | [] = imgRef.current.files;
    /*let bolbToFile = new File([custImg], custImg.name); */
    const formData = new FormData();
    /*  formData.append("files", bolbToFile);*/
    for (let i = 0; i < file.length; i++) {
      formData.append("files", file[i]);
    }
    const params = JSON.stringify({ postUserId: 200, postContent: content });
    formData.append(
      "content",
      new Blob([params], { type: "application/json" })
    );

    getData({ formData });
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

    /*  const file: any | [] = imgRef.current.files;
    const options = {
      maxSizeMB: 0.3, // 최대 용량
      maxWidthOrHeight: 400,
      useWebWorker: true,
      //onProgress: 0,
    };
    try {
      const compressedFile = await imageCompression(file[0], options);
      setCustImg(compressedFile);
      const promise = imageCompression.getDataUrlFromFile(compressedFile);
      promise.then((result) => {
        setImg(result);
      });
    } catch (error) {
      console.error("error : " + error);
    }*/
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
            multiple
          ></input>
        </section>
        <section>
          <textarea
            placeholder="문구를 작성해주세요."
            ref={focus}
            onChange={(e) => {
              fncChangeVal(e.target.value);
            }}
          ></textarea>
        </section>
      </div>
    </>
  );
};

export default EnrollTemplate;
