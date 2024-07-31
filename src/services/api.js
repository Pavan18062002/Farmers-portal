import axios from 'axios';

// Mock API URL
const API_URL = 'http://localhost:5000'; // Your local server URL or API endpoint

export const fetchMarketRates = async () => {
  try {
    const response = await axios.get(`${API_URL}/market-rates`);
    return response.data;
  } catch (error) {
    console.error('Error fetching market rates:', error);
    throw error;
  }
};

export const fetchCropDetails = async () => {
  try {
    const response = await axios.get(`${API_URL}/crops`);
    return response.data;
  } catch (error) {
    console.error('Error fetching crop details:', error);
    throw error;
  }
};
