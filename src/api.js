import axios from 'axios';

// Use the API key from the environment variables
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';

// Function to fetch weather data for a given city
export const fetchWeather = async (city) => {
  try {
    // Make a GET request to the API with the city, API key, and units (metric)
    const response = await axios.get(`${API_URL}`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Log any error that occurs during the request
    console.error("Error fetching weather data:", error);
    return null;
  }
};
