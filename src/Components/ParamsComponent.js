import React from "react";
import { useParams } from "react-router-dom";

const ParamsComponent = (props) => {
  const { word, color, bgCol } = useParams();

  return (
    <div>
      {/* this returns a boolean based on whether the argument is a number */}
      {isNaN(word) ? (
        //   if the param isnt a number:
        <p style={color ? { color: color, backgroundColor: bgCol } : null}>
          The word is : {word}
        </p>
      ) : (
        //   if the word param IS a number :
        <p>This number is : {word}</p>
      )}
    </div>
  );
};

export default ParamsComponent;
