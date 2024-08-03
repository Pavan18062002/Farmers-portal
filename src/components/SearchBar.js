import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={t('search_placeholder')}
      />
      <button onClick={handleSearch}>{t('search_button')}</button>
    </div>
  );
};

export default SearchBar;
