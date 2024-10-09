import React, { useState } from 'react';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl
      variant="outlined"
      sx={{ 
        minWidth: 150, 
        position: 'relative', 
        marginRight: '5px', 
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#f2f2f288',
          },
          '&:hover fieldset': {
            borderColor: '#f2f2f2', 
          },
          '&.Mui-focused fieldset': {
            borderColor: '#f2f2f2', 
          },
        },
      }}
    >
      <InputLabel 
        id="region-label" 
        sx={{ 
          color: selectedOption ? '#f2f2f2' : '#f2f2f288', 
          '&.Mui-focused': {
            color: '#f2f2f2',
          },
        }}
      >
        Region
      </InputLabel>
      <Select
        labelId="region-label"
        value={selectedOption}
        onChange={handleChange}
        label="Region"
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: '#202c36',
              color: '#f2f2f2',
              '& .MuiMenuItem-root': {
                backgroundColor: '#2B3844',
                color: '#f2f2f2',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff', 
                },
              },
            },
          },
        }}
        sx={{
          backgroundColor: '#202c36',
          color: '#f2f2f2',
          '& .MuiSelect-icon': {
            color: '#f2f2f2',
          },
          '& .MuiSelect-select': {
            textAlign: 'left',
          },
        }}
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Africa">Africa</MenuItem>
        <MenuItem value="Americas">Americas</MenuItem>
        <MenuItem value="Asia">Asia</MenuItem>
        <MenuItem value="Europe">Europe</MenuItem>
        <MenuItem value="Oceania">Oceania</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
