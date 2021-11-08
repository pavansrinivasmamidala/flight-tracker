import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function InputBar() {
  return (
    <Paper
      component="form"
      sx={styles.paperStyles}
    >
      <InputBase
        sx={styles.inputBase}
        placeholder="Search Flights"
        inputProps={{ "aria-label": "search flights" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

const styles = {
    paperStyles:{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "25%",
        justifyContent: "center",
        zIndex:100,
        position:"absolute",
        marginTop:"30px",
        marginLeft:"30px"
    },
    inputBase:{
        ml: 1,
        flex: 1,
        borderRadius:"10px",
        fontSize:"18px"
    }

};
