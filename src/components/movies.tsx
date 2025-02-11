'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageGrid from './images-grid';

export default function MovieList() {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get('/api/movies');
        setMovies(response.data.results);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  if (loading)
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );

  if (error)
    return (
      <div>
        <p>Erro: {error}</p>
      </div>
    );

  return (
    <div>
      {movies?.length ? (
        <ImageGrid images={movies?.map((movie) => {
          const alt = movie.title;
          const url = movie.poster_path;
  
          return {
            alt,
            url
          }
        })}/>
      ) : null}
    </div>
  );
}
