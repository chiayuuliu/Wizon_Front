import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const override = {
  position: "absolute",
  left: "50%",
  top: "50%",
};
const Spinner = () => {
  return (
    <div className="sweet-loading">
      <PropagateLoader color="#f8b62d" cssOverride={override} size={20} />
    </div>
  );
};

export default Spinner;
