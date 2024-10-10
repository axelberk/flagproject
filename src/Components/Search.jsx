import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Search() {
  return (
    <Box
      component="form"
      sx={{ 
        '& > :not(style)': { 
          
          width: '300px', 
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
          input: { color: '#f2f2f2' }, 
          '& .MuiInputLabel-root': { 
            color: '#f2f2f288', 
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#f2f2f2', 
          },
        }}
      />
    </Box>
  );
}

/* import "./Search.css"

const Search = () => {
    return (
        <div className="inputContainer">
            <input type="text" id="search" className="SearchBar" placeholder=" "/>
            <label className="SearchLabel" htmlFor="search">Search for a country...</label>
            
        </div>
        
    )
}

export default Search */