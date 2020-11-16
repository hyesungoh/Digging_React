import React from "react";
import PropTypes from "prop-types";

function Movie({id, title, year, summary, poster}) {
    return (
        <div>
            <h1> {title}</h1>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;
