interface MovieEntry {
    title: string;
    releaseYear: number;
    programType: string;
    images: {
      'Poster Art': {
        url: string;
      };
    };
  }
  
  interface FilterAndSortOptions {
    searchTerm: string;
    sortKey: string;
    entries: MovieEntry[];
  }
  
  export const filterAndSortData = ({ searchTerm, sortKey, entries }: FilterAndSortOptions): MovieEntry[] => {
    return entries
      .filter(entry => entry.releaseYear >= 2010)
      .filter(entry => entry.title.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => {
        if (sortKey === 'year-desc') return b.releaseYear - a.releaseYear;
        if (sortKey === 'year-asc') return a.releaseYear - b.releaseYear;
        if (sortKey === 'title-desc') return b.title.localeCompare(a.title);
        if (sortKey === 'title-asc') return a.title.localeCompare(b.title);
        return 0;
      });
  };
  