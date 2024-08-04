
import { MovieCardProps } from '../type/Types';
import Card from './element/Card';


const MovieCard = ({ title, imageUrl }:MovieCardProps) => (
  <Card className="bg-white rounded shadow">
    <div className=" w-full">
      <img src={imageUrl} alt={title} className="w-full aspect-[2/3] object-cover" />
    </div>
    <p className="mt-2 text-sm">{title}</p>
  </Card>
);

export default MovieCard;
