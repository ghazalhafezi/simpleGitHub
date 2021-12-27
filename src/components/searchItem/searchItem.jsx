import React, { useEffect, useState } from "react";
import "../searchItem/searchItem.css";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

SearchItem.prototype = {
  data: PropTypes.array,
};
export default function SearchItem(props) {
  return (
    <div className="result">
      {props.data.map((item) => (
        <Link to={`/user/${item.login}`} className="item" key={item.id}>
          <div>
            <img src={item.avatar_url} alt="" />
          </div>
          <div>{item.login}</div>
        </Link>
      ))}
    </div>
  );
}
// SearchItem.PropTypes = {
//   data: PropTypes.array,
// };
