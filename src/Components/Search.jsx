import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeContext } from './ThemeContext';

export default function Search({onSearch}) {
    const {theme} = useContext(ThemeContext);

    const handleChange = (e) => {
        onSearch(e.target.value)
    }

  return (
    <Box
      component="form"
      sx={{ 
        '& > :not(style)': { 
          
          width: '260px', 
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: theme === "dark" ? '#f2f2f288' : "#black",
            },
            '&:hover fieldset': {
              borderColor: theme === "dark" ? '#f2f2f2' : "black",
            },
            '&.Mui-focused fieldset': {
              borderColor: theme === "dark" ? '#f2f2f2' : "black",
            },
          },
        }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        id="outlined-basic" 
        label="Search for a country..." 
        variant="outlined" 
        sx={{
          input: { color: theme === "dark" ? '#f2f2f2' : 'black' }, 
          '& .MuiInputLabel-root': { 
            color: theme === "dark" ? '#f2f2f288' : "gray", 
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: theme === "dark" ? '#f2f2f2' : 'black', 
          },
        }}
        onChange={handleChange}
      />
    </Box>
  );
}

