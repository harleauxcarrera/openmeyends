import React from "react";
import { withRouter } from "react-router-dom";
import "../menu-item/menu-item.styles.scss";

export const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}) => {
  //history accessed through withRouter
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP</span>
      </div>
    </div>
  );
};
export default withRouter(MenuItem); //wrap withRouter to get access to match/history location props for backspace routing
