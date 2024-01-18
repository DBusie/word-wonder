import React, { useState } from "react";
import axios from "axios";

export default function DictTest() {
  const [data, setData] = useState("");
  const [searchWord, setSearchWord] = useState("");

  function getMeaning() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`;
    axios
      .get(apiUrl)
      .then(function (response) {
        setData(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="WordFinder">
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
        <button onClick={getMeaning}>Search</button>
      </div>
      <div>
        <p>{data}</p>
      </div>
    </div>
  );
}
