// hooks/useMovies.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Movie } from '../interfaces/movies';

const fetchMovies = async () => {
  const response = await axios.get('/api/movies');
  return response.data.results as Movie[];
};

export function useMovies() {
  return useQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies,
    staleTime: 86_400_000,
    placeholderData: (prev) => prev,
  });
}
