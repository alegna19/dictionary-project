import React from "react";

export default function Meaning(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div>
            {definition.definition}
            {definition.example}
          </div>
        );
      })}
    </div>
  );
}
