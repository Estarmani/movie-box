export interface MovieCardProps {
    title: string;
    imageUrl: string;
  }
  
  export interface MovieGridProps {
    movies: { title: string; imageUrl: string }[];
  }
  
export interface Movie {
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

export interface MoviesData {
  total: number;
  entries: Movie[];
}