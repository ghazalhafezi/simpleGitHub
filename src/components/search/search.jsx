import React, { useState } from "react";
import SearchItem from "../searchItem/searchItem";

export default function Search() {
  const [searchResult, setsearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
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
          setLoading(false);
        });
  };

  return (
    <>
      <h2>search</h2>
      <form action="">
        <input
          onChange={SearchHandler}
          type="text"
          placeholder="Enter UserName"
        />
      </form>
      {loading && searchResult ? (
        <span>Loading...</span>
      ) : (
        <div className="search-result">
          {<SearchItem data={searchResult} />}
        </div>
      )}
    </>
  );
}
