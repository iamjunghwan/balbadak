import ListItem from "../components/ListItem";

const ListTemplate = () => {
  const itemList = [];

  return (
    <>
      <div className="List_area">
        <div className="menu_wrapper">
          <div className="menu_col">
            <div className="img_item">
              <img src={process.env.PUBLIC_URL + `../hamburger.png`}></img>
            </div>

            <div className="img_item">
              <img src={process.env.PUBLIC_URL + `../like.png`}></img>
            </div>

            <div className="img_item">
              <img src={process.env.PUBLIC_URL + `../joy.png`}></img>
            </div>
          </div>
        </div>
        <div className="ListItem_area">
          <ListItem imgNm={`background`}></ListItem>
          <ListItem imgNm={`lake`}></ListItem>
          <ListItem imgNm={`background`}></ListItem>
          <ListItem imgNm={`lake`}></ListItem>
          <ListItem imgNm={`background`}></ListItem>
        </div>
      </div>
    </>
  );
};

export default ListTemplate;
