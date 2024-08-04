import { MovieGridProps } from '../type/Types';
import MovieCard from './MovieCard';


const MovieList = ({ movies }:MovieGridProps) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 p-4">
    {movies.map((movie, index) => (
      <MovieCard key={index} title={movie.title} imageUrl={movie.imageUrl} />
    ))}
  </div>
);

export default MovieList;
