import React from "react";
const Header = ({
  leftComponent,
  centerComponent,
  rightComponent01,
  rightComponent02,
}) => {
  return (
    <header>
      <div className="leftImg">{leftComponent}</div>
      <div className="centerText">{centerComponent}</div>
      <div className="rightImg">{rightComponent01}</div>
      <div className="rightImg">{rightComponent02}</div>
    </header>
  );
};

export default React.memo(Header);
