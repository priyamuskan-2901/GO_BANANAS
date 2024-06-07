import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

// Define the WeatherCard component to display weather information
const WeatherCard = ({ weather }) => {
  // If no weather data is provided, return null (do not render anything)
  if (!weather) return null;

  return (
    // Card component to display weather data
    <Card>
      <CardContent>
        {/* Display the city name */}
        <Typography variant="h5">{weather.name}</Typography>
        {/* Display weather description */}
        <Typography variant="h6">{weather.weather[0].description}</Typography>
        {/* Display temperature */}
        <Typography variant="body1">Temperature: {weather.main.temp} °C</Typography>
        {/* Display humidity */}
        <Typography variant="body1">Humidity: {weather.main.humidity} %</Typography>
        {/* Display wind speed */}
        <Typography variant="body1">Wind Speed: {weather.wind.speed} m/s</Typography>
      </CardContent>
    </Card>
  );
};

// Export the WeatherCard component as the default export
export default WeatherCard;
