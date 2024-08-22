import React from "react";
import Avatar from "./Avatar";
import DetailInfo from "./DetailInfo";


function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar imgUrl = {props.imgUrl} />
      </div>
      <div className="bottom">
         <DetailInfo info={props.phone} />
         <DetailInfo info={props.email} />
      </div>
    </div>
  );
}

export default Card;
