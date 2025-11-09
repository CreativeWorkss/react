import React from "react";
import NormalComponent from "./NormalComponent";
import HOCComponent from "./HOCComonent";

function UpdatedComponent(props) {
  return (
    <>
      <NormalComponent name={props.name} />
    </>
  );
}

export default HOCComponent(UpdatedComponent);
