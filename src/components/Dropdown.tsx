import React from 'react';

const Dropdown: React.FC<{ onSort: (sortKey: string) => void }> = ({ onSort }) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSort(event.target.value);
  };

  return (
  <div className="pr-4">
      <select className="p-2 border border-gray-300 rounded mb-4" onChange={handleSortChange}>
      <option value="">Sort by</option>
      <option value="year-desc">Year (Descending)</option>
      <option value="year-asc">Year (Ascending)</option>
      <option value="title-desc">Title (Descending)</option>
      <option value="title-asc">Title (Ascending)</option>
    </select>
  </div>
  );
};

export default Dropdown;
