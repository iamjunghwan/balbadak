import ListItem from "../components/ListItem";

const DetailTemplate = () => {
  return (
    <div className="Deatail_area">
      <div className="selectItem_area">
        <ListItem
          imgNm={`background`}
          like={"♥ 100명이 좋아 합니다."}
          rgDate={"2023.03.17"}
          txt={"이 사진은 내가 갔던 나라의 한 공간입니다."}
          editImg={true}
        ></ListItem>
        <ListItem
          imgNm={`lake`}
          like={"♥ 100명이 좋아 합니다."}
          rgDate={"2023.03.17"}
          txt={"이 사진은 내가 갔던 나라의 한 공간입니다."}
          editImg={true}
        ></ListItem>
        <ListItem
          imgNm={`background`}
          like={"♥ 100명이 좋아 합니다."}
          rgDate={"2023.03.17"}
          txt={"이 사진은 내가 갔던 나라의 한 공간입니다."}
          editImg={true}
        ></ListItem>
        <ListItem
          imgNm={`lake`}
          like={"♥ 100명이 좋아 합니다."}
          rgDate={"2023.03.17"}
          txt={"이 사진은 내가 갔던 나라의 한 공간입니다."}
          editImg={true}
        ></ListItem>
        <ListItem
          imgNm={`background`}
          like={"♥ 100명이 좋아 합니다."}
          rgDate={"2023.03.17"}
          txt={"이 사진은 내가 갔던 나라의 한 공간입니다."}
          editImg={true}
        ></ListItem>
      </div>
    </div>
  );
};

export default DetailTemplate;
