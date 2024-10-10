import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Search() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '400px', border: '1px solid #f2f2f288',
        '& MuiOutlinedInput-root' : {
            '&fieldset': {
                borderColor: '#f2f2f2'
                
            }
        }
       } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Search for a country..." variant="outlined" />
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