import ListItem from "../components/ListItem";

const DetailTemplate = () => {
  return (
    <div className="Deatail_area">
      <div className="selectItem_area">
        <ListItem
          id={"1"}
          imgSrc={`background`}
          like={"♥ 100명이 좋아 합니다."}
          rgDate={"2023.03.17"}
          content={"이 사진은 내가 갔던 나라의 한 공간입니다."}
          editImg={true}
        ></ListItem>
        <ListItem
          id={"2"}
          imgSrc={`lake`}
          like={"♥ 100명이 좋아 합니다."}
          rgDate={"2023.03.17"}
          content={"이 사진은 내가 갔던 나라의 한 공간입니다."}
          editImg={true}
        ></ListItem>
        <ListItem
          id={"3"}
          imgSrc={`background`}
          like={"♥ 100명이 좋아 합니다."}
          rgDate={"2023.03.17"}
          content={"이 사진은 내가 갔던 나라의 한 공간입니다."}
          editImg={true}
        ></ListItem>
        <ListItem
          id={"4"}
          imgSrc={`lake`}
          like={"♥ 100명이 좋아 합니다."}
          rgDate={"2023.03.17"}
          content={"이 사진은 내가 갔던 나라의 한 공간입니다."}
          editImg={true}
        ></ListItem>
        <ListItem
          id={"5"}
          imgSrc={`background`}
          like={"♥ 100명이 좋아 합니다."}
          rgDate={"2023.03.17"}
          content={"이 사진은 내가 갔던 나라의 한 공간입니다."}
          editImg={true}
        ></ListItem>
      </div>
    </div>
  );
};

export default DetailTemplate;
