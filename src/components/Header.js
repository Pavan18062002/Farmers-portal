import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
  return (
    <header>
        <h1>Farmers Portal</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/market-rates">Market Rates</Link>
        <Link to="/crop-monitoring">Crop Monitoring</Link>
        <Link to="/soil-information">Soil Information</Link>
      </nav>
    </header>
  );
};

export default Header;
