'use client';

import React from 'react';
import { useMovies } from '../hooks/useMovies';
import Image from 'next/image';

export default function MovieList() {
  const { data: movies, isLoading } = useMovies();

  const formatMovies =
    movies?.map((movie) => {
      const alt = movie.title;
      const url = movie.poster_path;

      return {
        alt,
        url,
      };
    }) || new Array(15).fill({});

  const renderImages = (startIndex: number, endIndex: number) => {
    return formatMovies?.slice(startIndex, endIndex).map((image, index) => (
      <div
        key={index}
        className={`relative h-56 w-36 rounded-lg overflow-hidden ${
          isLoading ? 'bg-gray-300 animate-pulse' : ''
        }`}
      >
        {!isLoading && (
          <Image
            src={`https://image.tmdb.org/t/p/w500${image.url}`}
            alt={image.alt || `Image ${startIndex + index}`}
            fill
            className="object-cover rounded-lg"
          />
        )}
      </div>
    ));
  };

  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-4">{renderImages(0, 3)}</div>
      <div className="flex flex-col gap-4 mb-36 -mt-32">
        {renderImages(3, 7)}
      </div>
      <div className="flex flex-col gap-4">{renderImages(7, 10)}</div>
      <div className="flex flex-col gap-4 mb-36 -mt-32">
        {renderImages(10, 14)}
      </div>
    </div>
  );
}
