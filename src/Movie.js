import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const emptyImg = "https://www.freeiconspng.com/uploads/no-image-icon-15.png";

const Movie = () => {
  const { movies, loading } = useGlobalContext();
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="movies">
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;
        return (
          <Link to={`/movies/${id}`} key={id} className="movie-link">
            <article>
              <img src={poster === "N/A" ? emptyImg : poster} alt={title} />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default Movie;
