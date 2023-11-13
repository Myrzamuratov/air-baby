import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create("width"),
    width: "100%",
    fontSize: "16px", // Размер по умолчанию

    [theme.breakpoints.down("lg")]: {
      fontSize: "18px", // Для ширины экрана до 1000px
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "16px", // Для ширины экрана до 700px
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px", // Для ширины экрана до 500px
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px", // Для ширины экрана до 400px
    },
  },
}));

export default function SearchElement({ secondSearch }) {
  const handleSearchChange = (event) => {
    const inputValue = event.target.value;
    secondSearch(inputValue);
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#0079A1", padding: "10px" }}>
      <Search
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          width: "100%",
          padding: "0 5px",
        }}
      >
        <SearchIconWrapper></SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={handleSearchChange}
        />
        <SearchIcon />
      </Search>
    </Box>
  );
}
