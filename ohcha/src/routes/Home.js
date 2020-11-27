import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.css";

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };

    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get(
            "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
        );

        this.setState({ movies, isLoading: false });
    };

    componentDidMount() {
        this.getMovies();
    }

    renderMovies = (movie) => {
        return (
            <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                large_poster={movie.large_cover_image}
            />
        );
    };

    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                <div className={`loader ${isLoading ? "show" : ""}`}>
                    <span className="loader__text">Loading ...</span>
                </div>
                <Header />
                <div className="movies">{movies.map(this.renderMovies)}</div>
                <Footer />
            </section>
        );
    }
}

export default Home;
