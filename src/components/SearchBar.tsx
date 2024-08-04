import { IoSearch } from "react-icons/io5";

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="flex mb-4 pl-6">
      <input
        type="text"
        placeholder="Search"
        className="flex-grow p-2 border border-gray-300 rounded-l"
        onChange={handleSearch}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-r">
      <IoSearch />
      </button>
    </div>
  );
};

export default SearchBar;
