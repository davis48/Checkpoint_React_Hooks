import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

// Composant fonctionnel MovieList qui prend une liste de films en prop
const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
