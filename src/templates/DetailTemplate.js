import ListItem from "../components/ListItem";

const DetailTemplate = () => {
  return (
    <div className="Deatail_area">
      <div className="selectItem_area">
        <ListItem
          imgNm={`background`}
          like={"♥ 100명이 좋아 합니다."}
          rgDate={"2023.03.17"}
        ></ListItem>
        <ListItem
          imgNm={`lake`}
          like={"♥ 100명이 좋아 합니다."}
          rgDate={"2023.03.17"}
        ></ListItem>
        <ListItem
          imgNm={`background`}
          like={"♥ 100명이 좋아 합니다."}
          rgDate={"2023.03.17"}
        ></ListItem>
        <ListItem
          imgNm={`lake`}
          like={"♥ 100명이 좋아 합니다."}
          rgDate={"2023.03.17"}
        ></ListItem>
        <ListItem
          imgNm={`background`}
          like={"♥ 100명이 좋아 합니다."}
          rgDate={"2023.03.17"}
        ></ListItem>
      </div>
    </div>
  );
};

export default DetailTemplate;
