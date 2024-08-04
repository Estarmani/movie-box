export interface MovieCardProps {
    title: string;
    imageUrl: string;
  }
  
  export interface MovieGridProps {
    movies: { title: string; imageUrl: string }[];
  }