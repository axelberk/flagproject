import React, { useState } from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Dropdown = ({ onSelectRegion }) => {
  const [selectedOption, setSelectedOption] = useState();
  const {theme} = useContext(ThemeContext);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    onSelectRegion(event.target.value);
  };

  const styles = {
    backgroundColor: theme === "dark" ? "#202c33" : "white",
    color: theme === "dark" ? "#f2f2f2" : "black",
    borderColor: theme === "dark" ? "#f2f2f288" : "gray",
    hoverBorderColor: theme === "dark" ? "#f2f2f2" : "black",
    focusedBorderColor: theme === "dark" ? "white" : "black",
    menuBackgroundColor: theme === "dark" ? "#2b3844" : "#fff",
    menuItemHoverBackgroundColor: theme === "dark" ? "#4b5562" : "rgb(221, 221, 221)",
    menuItemSelectedBackgroundColor: theme === "dark" ? "#4b5562" : "rgb(221, 221, 221)",
    menuItemSelectedHoverBackgroundColor: theme === "dark" ? "#626c77" : "rgb(221, 221, 221)",
}

  return (
    <FormControl
      variant="outlined"
      sx={{ minWidth: 150, position: 'relative', marginRight: '5px', '& .MuiOutlinedInput-root': {
        backgroundColor: styles.backgroundColor, color: styles.color,
          '& fieldset': { borderColor: styles.borderColor, color: styles.color },
          '&:hover fieldset': { borderColor: styles.hoverBorderColor },
          '&.Mui-focused fieldset': { borderColor: styles.focusedBorderColor },
          
        },
      }}
    >
      <InputLabel
        id="region-label" 
        sx={{ color: selectedOption ? styles.color : `${styles.color}88`, "&.Mui-focused": { color: styles.color } }}
      >
        Region
      </InputLabel>
      <Select
        labelId="region-label"
        value={selectedOption}
        onChange={handleChange}
        label="Region"
        sx={{ textAlign: "left", backgroundColor: styles.backgroundColor, color: styles.color, "& .MuiSelect-icon": { color: styles.color } }}
        MenuProps={{
           
            PaperProps: {
                sx: {
                    backgroundColor: styles.menuBackgroundColor,
                    "& .MuiMenuItem-root": { 
                        color: styles.color,
                        "&:hover": {
                            backgroundColor: styles.menuItemHoverBackgroundColor,
                        },
                        "&.Mui-selected": {
                            backgroundColor: styles.menuItemSelectedBackgroundColor,
                            "&:hover": {
                                backgroundColor: styles.menuItemSelectedHoverBackgroundColor
                            } 
                        }
                    }
                }
            }
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
