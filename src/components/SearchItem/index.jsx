import React from "react";

const SearchItem = (props) => {
  return (
    <div>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <p>{props.server}</p>
    </div>
  );
};

export default SearchItem;
