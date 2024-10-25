import * as React from 'react';
import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { ThemeContext } from './ThemeContext';

export default function Search({ onSearch, searchResults }) {
    const { theme } = useContext(ThemeContext);
    const [searchTerm, setSearchTerm] = useState(""); 
    const [noResults, setNoResults] = useState(false);

    const handleChange = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm); 
        onSearch(searchTerm); 
    };

    React.useEffect(() => {
        if (searchTerm && searchResults && searchResults.length === 0) {
            setNoResults(true);
        } else {
            setNoResults(false);
        }
    }, [searchTerm, searchResults]);

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {
                    width: '330px',
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
            fullWidth
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
