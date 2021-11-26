// eslint-disable-next-line no-unused-vars
import axios from "axios";
import { useState, useEffect } from "react";
export default function InputBar() {
  const [data, setData] = useState([]);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [input, setInput] = useState();


  const fetchData = async () => {
    const val = await axios.get(
      `https://aviation-edge.com/v2/public/autocomplete?key=c75eac-812e66&city=${input}`
    )
    setData(val); 
  }
  
 

  useEffect(() => {
      fetchData();
      console.log(data)
//      setSearchSuggestions([data.data.cities[0].nameCity])
  }, [input]);


  return (

    <div style={styles.paperStyles}>
      <input type="text" style={styles.inputBase} value={input} onChange={e => setInput(e.target.value)} placeholder="Enter City" />
      <div className="suggestions">
        {/* {searchSuggestions} ? (<p>City Name: {searchSuggestions.nameCity}</p>) : <p>Loading..</p> */}
        {searchSuggestions.map((suggestion) => {
          <p>{suggestion}</p>
          }
        )}
      </div>
    </div>
  );
}




const styles = {
  paperStyles: {
    width: "25%",
    zIndex: 100,
    position: "absolute",
    marginTop: "30px",
    marginLeft: "30px",
    boxShadow: "2px grey",
  },
  inputBase: {
    width:"100%",
    fontSize: 24,
    border:"none",
    height:40,
    paddingTop:4,
    paddingLeft:10,
    borderRadius:4
  },
};

