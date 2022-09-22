import React, { useState } from "react";
import { Box, Button, TextField, InputAdornment, ListItemSecondaryAction } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [searchData, setSearchData] = useState("");

  const handleChange = (e) => {
     setSearchData(e.target.value);
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        width: {xs:"100%", md:"88%"},
        marginLeft: {xs:"auto", md:"12%"},
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "Center",
        border: "2px solid",
        height: { xs: "auto", md: "10vh" },
        p: { xs: 2, md: "2rem" },
        gap: { xs: "1rem" },
        // backgroundColor: "black",
      }}
    >

      <Box
        flex="1"
        sx={{
          display: "flex",
          // justifyContent: "center",
        }}
      >
        <TextField
          variant="outlined"
          label="Search"
          value={searchData}
          onChange={handleChange}
          color="warning"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            width: { sm: "100%", md: "30rem" },
          }}
        />
      </Box>
    </Box>
  );
};

export default Search;
