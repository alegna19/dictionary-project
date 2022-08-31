import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    console.log(props.synonyms);
    return (
      <ul className="Synonyms">
        {props.synonyms.map((synonym, index) => {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
