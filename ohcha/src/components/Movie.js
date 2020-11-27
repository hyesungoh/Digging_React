import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, title, year, summary, poster, genres, large_poster }) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: `/movie/${id}`,
                    state: {
                        title,
                        year,
                        summary,
                        poster,
                        genres,
                        large_poster,
                    },
                }}
            >
                <img src={poster} alt={title} title={title}></img>
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="genres">
                        {genres.map((genre, index) => (
                            <li key={index} className="genres__genre">
                                {genre}
                            </li>
                        ))}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 100)}...</p>
                </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    large_poster: PropTypes.string.isRequired,
};

export default Movie;
