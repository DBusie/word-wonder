import { React, useState } from "react";
import Axios from "axios";
import { FaSearch } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";
import "./WordFinder.css";

export default function WordFinder() {
  const [data, setData] = useState("");
  const [searchWord, setSearchWord] = useState("");

  function getMeaning() {
    Axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
    ).then((response) => {
      setData(response.data[0]);
    });
  }

  function playAudio() {
    let audio = new Audio(data.phonetics[0].audio);
    audio.play();
  }

  return (
    <div className="WordFinder">
      <p>{data.meanings[0].partOfSpeech}</p>

      <h4>Definition:</h4>

      <p>{data.meanings[0].definitions[0].definition}</p>

      <h4>Example:</h4>

      <p>{data.meanings[0].definitions[0].example}</p>
    </div>
  );
}
