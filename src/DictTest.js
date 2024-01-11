import React from "react";
import axios from "axios";

export default function DictTest(response) {
  //const [data, setData] = useState("");
  //const [searchWord, setSearchWord] = useState("");
  //const word = "beautiful";
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/beautiful`;
  axios
    .get(apiUrl)
    .then(function (response) {
      console.log(response.data);
      return response.data.meanings;
    })
    .catch(function (error) {
      console.log(error);
    });
}
