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
          <div className="result-img">
            <img src={item.avatar_url} alt="" />
          </div>
          <div className="result-name">
            <span>{item.login}</span>
            <span className="score">Score: {item.score}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
// SearchItem.PropTypes = {
//   data: PropTypes.array,
// };
