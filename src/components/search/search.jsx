import React, { useState } from "react";
import SearchItem from "../searchItem/searchItem";
import "../search/search.css";

export default function Search() {
  const [searchResult, setsearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const SearchHandler = (e) => {
    let searchValue = e.target.value;
    setLoading(true);
    if (searchValue)
      fetch(
        `https://api.github.com/search/users?q=${searchValue}&per_page=5&page=1`
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setsearchResult(result.items);
          setTotalCount(totalCount + 5);
          setLoading(false);
        });
  };
  const nextHandler = () => {
    console.log("hi");
  };
  const prevHandler = () => {
    console.log("hi");
  };
  return (
    <div className="search">
      <form action="">
        <input
          onChange={SearchHandler}
          type="text"
          placeholder="Enter UserName"
          autoFocus
        />
      </form>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          <div className="search-result">
            {<SearchItem data={searchResult} />}
          </div>
          <div className="page">
            <button onClick={prevHandler} className="prev">
              Prev
            </button>
            <button onClick={nextHandler} className="next">
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
