import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

// Define the SearchBar component with a callback for search
const SearchBar = ({ onSearch }) => {
  // State to hold the city input by the user
  const [city, setCity] = useState('');

  // Function to handle the search button click or Enter key press
  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
    }
  };

  // Function to handle key press event
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    // Box component for layout
    <Box display="flex" justifyContent="center" m={2}>
      {/* TextField for city input */}
      <TextField
        label="Enter city"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}  // Add key press event handler
        sx={{ marginRight: 2 }}
      />
      {/* Button to trigger search */}
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
