import React, { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import Navbar from './component/Navbar';
import SearchBar from './component/SearchBar';
import WeatherCard from './component/WeatherCard';
import { fetchWeather } from './api';

// Define the main App component
const App = () => {
  // State to hold the weather data
  const [weather, setWeather] = useState(null);

  // Function to handle search and fetch weather data
  const handleSearch = async (city) => {
    const data = await fetchWeather(city);
    setWeather(data);
  };

  return (
    <>
      {/* CssBaseline component for consistent styling */}
      <CssBaseline />
      {/* Navbar component */}
      <Navbar />
      {/* Container component for layout */}
      <Container>
        {/* SearchBar component with a callback for search */}
        <SearchBar onSearch={handleSearch} />
        {/* WeatherCard component to display weather data */}
        <WeatherCard weather={weather} />
      </Container>
    </>
  );
};

export default App;
