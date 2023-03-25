import ListItem from "../components/ListItem";

const ListTemplate = () => {
  const itemList = [
    { imgNm: `background.png` },
    { imgNm: "lake.png" },
    { imgNm: `background.png` },
    { imgNm: "lake.png" },
    { imgNm: `background.png` },
    { imgNm: `2.mp4` },
  ];

  const FncSetComponentList = () => {
    return itemList.map((item, idx) => (
      <ListItem
        id={idx.toString()}
        key={idx.toString()}
        imgNm={item.imgNm}
      ></ListItem>
    ));
  };

  return (
    <>
      <div className="List_area">
        <div className="menu_wrapper">
          <div className="menu_col">
            <div className="img_item">
              <img
                src={process.env.PUBLIC_URL + `../hamburger.png`}
                alt={`로딩중...`}
              ></img>
            </div>

            <div className="img_item">
              <img
                src={process.env.PUBLIC_URL + `../like.png`}
                alt={`로딩중...`}
              ></img>
            </div>

            <div className="img_item">
              <img
                src={process.env.PUBLIC_URL + `../joy.png`}
                alt={`로딩중...`}
              ></img>
            </div>
          </div>
        </div>
        <div className="ListItem_area">{FncSetComponentList()}</div>
      </div>
    </>
  );
};

export default ListTemplate;
