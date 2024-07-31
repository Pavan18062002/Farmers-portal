import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MarketRatesPage from './components/MarketRatesPage';
import CropMonitoringPage from './components/CropMonitoringPage';
import SoilInformationPage from './components/SoilInformationPage';
import LanguageSwitcher from './components/LanguageSwitcher';
import './i18n';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/market-rates" element={<MarketRatesPage />} />
        <Route path="/crop-monitoring" element={<CropMonitoringPage />} />
        <Route path="/soil-information" element={<SoilInformationPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
