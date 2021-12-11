import { atom, selector, useRecoilState } from "recoil";
import { flightIataAtom } from "../../store";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainDiv = styled.div`
    background-color: #ffffff;
    background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const InputDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;
  const InputTag = styled.input`
    height: 5vh;
    width: 20vw;
    border: none;
    border-radius: 16px;
    box-shadow: 1px 1px 3px 3px #c3b1e1;
    margin-right: 20px;
    font-size: 20px;
    padding: 4px 4px 4px 10px;
  `;

  const flightSuggestionAtom = atom({
    key:"flightSuggestion",
    default:""
  });

  const flightSuggestionSelector = selector({
    key:"flightSuggestionSelector",
    get:async ({get}) => {

    }
  })

export default function Search() {
  const [flightIata, setFlightIata] = useRecoilState(flightIataAtom);

  const styles = {
    
    link: {
      borderRadius: "10px",
      textDecoration: "none",
      backgroundColor: "#C3B1E1",
      padding: "15px 15px 15px 15px",
      fontSize: "18px",
    },
  };

  


  
  return (
    <MainDiv>
      <InputDiv>
        <InputTag
          type="text"
          placeholder="Enter Flight Number"
          onChange={(e) => setFlightIata(e.target.value)}
          value={flightIata}
        />
        <Link to="/flight-tracker" style={styles.link}>
          Track
        </Link>
      </InputDiv>
      <div></div>
    </MainDiv>
  );
}
