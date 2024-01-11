import React from "react";
import axios from "axios";

export default function DictTest(response) {
  //const [data, setData] = useState("");
  //const [searchWord, setSearchWord] = useState("");
  //const word = "beautiful";
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/beautiful`;
  axios.get(apiUrl);

  return (
    <div className="WordFinder">
      <p>response</p>

      <h4>Definition:</h4>

      <p>definition</p>

      <h4>Example:</h4>

      <p>example</p>
    </div>
  );
}
