'use client';

import React from 'react';
import ImageGrid from './images-grid';
import { useMovies } from '../hooks/useMovies';

export default function MovieList() {
  const { data: movies, isLoading, isError, error } = useMovies();

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro: {error.message}</p>;

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
