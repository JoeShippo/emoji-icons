import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search emojis..."
      value={searchTerm}
      onChange={handleChange}
      className='input input-bordered w-full'
    />
  );
}

export default SearchBar;