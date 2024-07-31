import React, { useEffect, useState } from 'react';
import { fetchMarketRates } from '../services/api';

const MarketRatesPage = () => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const getMarketRates = async () => {
      try {
        const data = await fetchMarketRates();
        setRates(data);
      } catch (error) {
        console.error('Error fetching market rates:', error);
      }
    };

    getMarketRates();
  }, []);

  return (
    <div>
      <h1>Market Rates</h1>
      <ul>
        {rates.map(rate => (
          <li key={rate.id}>{rate.crop}: ${rate.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default MarketRatesPage;
