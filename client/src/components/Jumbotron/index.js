import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ textAlign: "center" }}
      className="jumbotron bg-info text-white"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
