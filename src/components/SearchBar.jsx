// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Input } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
        height: 40
      }}
    >
      <Input
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}
        // sx={{
        //   outline: 'none',
        //   border: 'none'
        // }}
      />
      <IconButton type="Submit" sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
