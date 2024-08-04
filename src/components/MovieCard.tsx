import { MovieCardProps } from "../type/Types";
import Card from "./element/Card";

const MovieCard = ({ title, imageUrl }: MovieCardProps) => (
  <div className="flex flex-col items-center cursor-pointer">
    <Card className="w-32 h-48 bg-white flex items-center justify-center relative">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </Card>
    <span className="mt-2 text-sm text-gray-600">{title}</span>
  </div>
  
);

export default MovieCard;
