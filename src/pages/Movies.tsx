import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Dropdown from '../components/Dropdown';
import MovieList from '../components/MovieList';
import { filterAndSortData } from '../utils/filterAndSortData';
import { useFetchMovies } from '../components/hooks/useFetchMovies';


const ITEMS_PER_PAGE = 21;

const Movies = () => {
  const { data, isLoading, error } = useFetchMovies();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const filteredData = filterAndSortData({
    searchTerm,
    sortKey,
    entries: data?.entries ?? []
  });

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const paginatedData = filteredData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
          <div className="bg-gray-800 text-white p-4">
          <h2 className="text-xl">Popular Movies</h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center my-4">
          <div className="px-4">
            <SearchBar onSearch={setSearchTerm} />
          </div>
          <div className="">
            <Dropdown onSort={setSortKey} />
          </div>
        </div>
      <MovieList movies={paginatedData.map(entry => ({
        title: entry.title,
        imageUrl: entry.images['Poster Art'].url,
      }))} />
      <div className="flex gap-5 justify-center items-center my-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
            className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Movies;
