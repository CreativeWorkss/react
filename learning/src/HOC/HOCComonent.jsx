import React from "react";

function HOCComponent(Wrapper) {
  return function NewComponent(props) {
    return (
      <div
        style={{
          border: "2px solid black",
          backgroundColor: "blue",
          height: "100px",
        }}
      >
        <Wrapper {...props} />
      </div>
    );
  };
}

export default HOCComponent;
