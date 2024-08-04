import Card from "../components/element/Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div className="bg-gray-800 text-white p-4 mb-8">
        <h2 className="text-xl">Popular Titles</h2>
      </div>
      <div className="flex items-center space-x-4  p-6">
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleCardClick("/series")}
        >
          <Card className="w-32 h-48 bg-black flex items-center justify-center relative">
            <img
              src="/movie-logo.png"
              alt="Series icon"
              width={32}
              height={32}
              className="absolute top-2 left-2"
            />
            <span className="text-white text-xl font-bold">SERIES</span>
          </Card>
          <span className="mt-2 text-sm text-gray-600">Popular Series</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleCardClick("/movies")}
        >
          <Card className="w-32 h-48 bg-black flex items-center justify-center relative">
            <img
              src="/movie-logo.png"
              alt="Movies icon"
              width={32}
              height={32}
              className="absolute top-2 left-2"
            />
            <span className="text-white text-xl font-bold">MOVIES</span>
          </Card>
          <span className="mt-2 text-sm text-gray-600">Popular Movies</span>
        </div>
            
      </div>
    </>
  );
};

export default Home;
