import React from "react";
import PropTypes from "prop-types";

const Vedio = ({ embedId }) => (
  <div className="videoWrap">
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

Vedio.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Vedio;