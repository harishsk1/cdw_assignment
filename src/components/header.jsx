import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Header({ setSearchTerm }) {
  const handelSearchInput = ({ target }) => setSearchTerm(target.value);

  return (
    <AppBar position="static" sx={{ boxShadow: "none" }}>
      <Toolbar
        sx={{
          backgroundColor: "#54acfa",
          boxShadow: "none",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" sx={{ px: 3 }}>
          Team
        </Typography>
        <TextField
          size="small"
          id="input-with-icon-textfield"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          sx={{
            borderRadius: "30px",
            backgroundColor: "white",
            "&:hover": {
              borderRadius: "30px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
              overflow: "hidden",
            },
          }}
          onChange={handelSearchInput}
        />
      </Toolbar>
    </AppBar>
  );
}
