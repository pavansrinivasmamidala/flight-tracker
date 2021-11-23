// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AsyncSelect from "react-select/async";
import useFetch from "react-fetch-hook";

export default function InputBar() {
  const [value, setValue] = useState(null);

  const loadData = async (inputText, callback) => {
    if (inputText.length() > 2) {
      const data = await fetch(
        `https://aviation-edge.com/v2/public/autocomplete?key=c75eac-812e66&${inputText}`
      );
      const response = await data.json();
      console.log(response);
      callback(response.map( i => ({label:i.nameAirport, value:i.codeIataAirport, country: i.nameCountry})))
    }
  };
  return (
    // <Paper
    //   component="form"
    //   sx={styles.paperStyles}
    // >
    //   <InputBase
    //     sx={styles.inputBase}
    //     placeholder="Search Flights"
    //     inputProps={{ "aria-label": "search flights" }}
    //   />
    //   <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
    //     <SearchIcon />
    //   </IconButton>

    // </Paper>

    <AsyncSelect
      styles={styles.paperStyles}
      value={value}
      onChange={(value) => setValue(value)}
      placeholder="Enter a City"
      loadOptions={loadData}
    />
  );
}

// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import CircularProgress from '@mui/material/CircularProgress';
// import useFetch from 'react-fetch-hook';

// function sleep(delay = 0) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// }

// export default function InputBar() {
//   const [open, setOpen] = React.useState(false);
//   const [options, setOptions] = React.useState([]);
//   const loading = open && options.length === 0;

//   //const {isLoading ,error , data} = useFetch(`https://aviation-edge.com/v2/public/autocomplete?key=c75eac-812e66&${}`)

//   React.useEffect(() => {
//     let active = true;

//     if (!loading) {
//       return undefined;
//     }

//     (async () => {
//       await sleep(1e3); // For demo purposes.

//       if (active) {
//         setOptions([...topFilms]);
//       }
//     })();

//     return () => {
//       active = false;
//     };
//   }, [loading]);

//   React.useEffect(() => {
//     if (!open) {
//       setOptions([]);
//     }
//   }, [open]);

//   return (
//     <Autocomplete
//       id="asynchronous-demo"
//       sx={styles.paperStyles}
//       open={open}
//       onOpen={() => {
//         setOpen(true);
//       }}
//       onClose={() => {
//         setOpen(false);
//       }}
//       isOptionEqualToValue={(option, value) => option.title === value.title}
//       getOptionLabel={(option) => option.title }
//       options={options}
//       loading={loading}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           label="Search City"
//           InputProps={{
//             ...params.InputProps,
//             endAdornment: (
//               <React.Fragment>
//                 {loading ? <CircularProgress color="inherit" size={20} /> : null}
//                 {params.InputProps.endAdornment}
//               </React.Fragment>
//             ),
//           }}
//         />
//       )}
//     />
//   );
// }
const styles = {
  paperStyles: {
    display: "flex",
    alignItems: "center",
    width: "25%",
    justifyContent: "center",
    zIndex: 100,
    position: "absolute",
    marginTop: "30px",
    marginLeft: "30px",
    boxShadow: "2px grey",
    backgroundColor: "white",
  },
  inputBase: {
    ml: 1,
    flex: 1,
    borderRadius: "10px",
    fontSize: "18px",
  },
};

// const topFilms = [
//   { title: 'The Shawshank Redemption', year: 1994 },
//   { title: 'The Godfather', year: 1972 },
//   { title: 'The Godfather: Part II', year: 1974 },
//   { title: 'The Dark Knight', year: 2008 },
//   { title: '12 Angry Men', year: 1957 },
//   { title: "Schindler's List", year: 1993 },
//   { title: 'Pulp Fiction', year: 1994 },
//   {
//     title: 'The Lord of the Rings: The Return of the King',
//     year: 2003,
//   },
// ];
