import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const handleFilter = ({ title, rating }) => {
    let filtered = movies;
    if (title) {
      filtered = filtered.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    }
    if (rating) {
      filtered = filtered.filter(movie => movie.rating >= rating);
    }
    setFilteredMovies(filtered);
  };

  return (
    <div className="app">
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies.length > 0 ? filteredMovies : movies} />
      <button onClick={() => addMovie({ 
        title: 'New Movie', 
        description: 'Description of the new movie', 
        posterURL: 'https://via.placeholder.com/150', 
        rating: 5 
      })}>
        Add New Movie
      </button>
    </div>
  );
};

export default App;
