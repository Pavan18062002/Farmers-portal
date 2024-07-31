import React, { useEffect, useState } from 'react';
import { fetchCropDetails } from '../services/api';

const CropMonitoringPage = () => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    const getCropDetails = async () => {
      try {
        const data = await fetchCropDetails();
        setCrops(data);
      } catch (error) {
        console.error('Error fetching crop details:', error);
      }
    };

    getCropDetails();
  }, []);

  return (
    <div>
      <h1>Crop Monitoring</h1>
      {crops.map(crop => (
        <div key={crop.id}>
          <h2>{crop.name}</h2>
          <p>{crop.description}</p>
          <p><strong>Growth Conditions:</strong> {crop.growthConditions}</p>
          <p><strong>Suitable Soil:</strong> {crop.suitableSoil}</p>
        </div>
      ))}
    </div>
  );
};

export default CropMonitoringPage;
