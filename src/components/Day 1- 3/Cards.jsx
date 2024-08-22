import React from "react";

const Cards = ({name,imgUrl,phone,email}) => {
  return (
    <>
      <div>
        <h1 className="text-xl font-bold my-3">{name}</h1>
        <img
          src={imgUrl}
          alt="img1"
        />
        <p className="mt-3">{phone}</p>
        <p className="mt-3">{email}</p>
      </div>
    </>
  );
};

export default Cards;
