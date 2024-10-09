import React, { useState } from 'react';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('Region');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl variant="outlined" sx={{ minWidth: 150, position: 'relative' }}>
      <InputLabel id="region-label" sx={{ color: '#f2f2f288' }}>{selectedOption}</InputLabel>
      <Select
        labelId="region-label"
        value={selectedOption}
        onChange={handleChange}
        label="Region"
        sx={{
          backgroundColor: '#202c36',
          color: '#f2f2f2',
          border: '1px solid #f2f2f288',
          '&:hover': {
            borderColor: '#f2f2f2',
          },
          '&.Mui-focused': {
            borderColor: '#f2f2f2',
          },
          '& .MuiSelect-icon': {
            color: '#f2f2f2',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#f2f2f288',
          },
        }}
      >
        <MenuItem value="All" sx={{ backgroundColor: '#2B3844', color: '#f2f2f2' }}>All</MenuItem>
        <MenuItem value="Africa" sx={{ backgroundColor: '#2B3844', color: '#f2f2f2' }}>Africa</MenuItem>
        <MenuItem value="Americas" sx={{ backgroundColor: '#2B3844', color: '#f2f2f2' }}>Americas</MenuItem>
        <MenuItem value="Asia" sx={{ backgroundColor: '#2B3844', color: '#f2f2f2' }}>Asia</MenuItem>
        <MenuItem value="Europe" sx={{ backgroundColor: '#2B3844', color: '#f2f2f2' }}>Europe</MenuItem>
        <MenuItem value="Oceania" sx={{ backgroundColor: '#2B3844', color: '#f2f2f2' }}>Oceania</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
