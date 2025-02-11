import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex space-x-4 my-2">
      <TextField
        variant="outlined"
        label="Search Content"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-1"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setSearchQuery("")}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Clear
      </Button>
    </div>
  );
};
