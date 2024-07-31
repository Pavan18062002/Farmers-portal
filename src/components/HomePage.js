import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import SearchBar from './SearchBar';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  const { t } = useTranslation();
  const [filteredCrops, setFilteredCrops] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredCrops([]);
      setError('');
      return;
    }

    axios.get('http://localhost:5000/crops')
      .then(response => {
        const crops = response.data;
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
      })
      .catch(error => {
        console.error('Error searching crop data:', error);
        setError(t('search_error'));
      });
  };

  return (
    <div className="homepage">
      <h1>{t('welcome_message')}</h1>
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
              <h2>{crop.name}</h2>
              <p>{crop.description}</p>
              <div className="details">
                <p>{t('growth_conditions')}: {crop.growthConditions}</p>
                <p>{t('suitable_soil')}: {crop.suitableSoil}</p>
                <p>{t('market_rates')}: {crop.marketRates}</p>
                <p>{t('soil_information')}: {crop.soilInformation}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
