import React from "react";

export default function Meaning(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div>
            <p>
              <strong> Definition:</strong>
              {definition.definition}
              <br />
              <strong>Example:</strong>
              {definition.example}
              <br />
              <strong>Synonyms</strong>
              {definition.synonyms}
            </p>
          </div>
        );
      })}
    </div>
  );
}
