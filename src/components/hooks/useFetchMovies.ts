import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from '../api/fetchData';
import { MoviesData } from '../../type/Types';


export const useFetchMovies = () => {
  return useQuery<MoviesData, Error>({
    queryKey: ['movies'],
    queryFn: fetchMovies,
  });
};
