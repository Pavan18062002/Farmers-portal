import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './HomePage.css';
import cropsData from '../assets/crops.json';

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const [crops, setCrops] = useState([]);
  const [filteredCrops, setFilteredCrops] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setCrops(cropsData);
    setFilteredCrops(cropsData);
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredCrops(crops);
      setError('');
      return;
    }

    const matchedCrops = crops.filter(crop =>
      crop.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (matchedCrops.length > 0) {
      setFilteredCrops(matchedCrops);
      setError('');
    } else {
      setFilteredCrops([]);
      setError(t('no_crops_found'));
    }
  };

  return (
    <div className="homepage">
       <div className="language-selector">
        <button onClick={() => i18n.changeLanguage('en')}>English</button>
        <button onClick={() => i18n.changeLanguage('hi')}>हिन्दी</button>
        <button onClick={() => i18n.changeLanguage('te')}>తెలుగు</button>
        <button onClick={() => i18n.changeLanguage('ta')}>தமிழ்</button>
      </div>
      <h3>{t('welcome_message')}</h3>
      <div className="search-bar-container">
        <SearchBar onSearch={handleSearch} />
      </div>
      {error && <p>{error}</p>}
      <div className="crop-list">
        {filteredCrops.length === 0 && !error ? (
          <p>{t('search_prompt')}</p>
        ) : (
          filteredCrops.map(crop => (
            <div className="crop-item" key={crop.id}>
              <Link to={`/detail/${crop.id}`}>
              <h2>{t(`crops.${crop.name.toLowerCase()}`)}</h2>
                {/* <p>{crop.description}</p> */}
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
