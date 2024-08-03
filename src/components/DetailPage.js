import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cropsData from '../assets/crops.json';
import './DetailPage.css';

const DetailPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [crop, setCrop] = useState(null);

  useEffect(() => {
    const cropData = cropsData.find(crop => crop.id === parseInt(id));
    if (cropData) {
      setCrop(cropData);
    }
  }, [id]);

  if (!crop) {
    return <p>{t('not_found')}</p>;
  }
  const cropDetails = t(`crop_details.${crop.name.toLowerCase()}`, { returnObjects: true });
  const cropName = t(`crops.${crop.name.toLowerCase()}`);
  return (
    <div className="detail-page">
    <h1>{cropName}</h1>
    <h3>{t('description')}</h3>
    <p>{cropDetails.description}</p>
    <h3>{t('market_rates')}</h3>
    <p>{cropDetails.marketRates}</p>
    <h3>{t('soil_information')}</h3>
    <p>{cropDetails.soilInfo}</p>
    <h3>{t('growth_conditions')}</h3>
    <p>{cropDetails.growthConditions}</p>
  </div>
  );
};

export default DetailPage;
