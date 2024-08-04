import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from '../api/fetchData';

interface Movie {
  title: string;
  description: string;
  programType: string;
  images: {
    'Poster Art': {
      url: string;
      width: number;
      height: number;
    };
  };
  releaseYear: number;
}

interface MoviesData {
  total: number;
  entries: Movie[];
}

export const useFetchMovies = () => {
  return useQuery<MoviesData, Error>({
    queryKey: ['movies'],
    queryFn: fetchMovies,
  });
};
