import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map((phonetic, index) => {
          return (
            <div>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {props.results.meanings.map((meaning, index) => {
          //   return meaning.definitions[0].definition;
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
