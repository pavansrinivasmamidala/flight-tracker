import { useRecoilState } from "recoil";
import { flightIataAtom } from "../../store";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Search() {
  const [flightIata, setFlightIata] = useRecoilState(flightIataAtom);

  const styles = {
    input: {
      height: "5vh",
      width: "20vw",
      border: "none",
      borderRadius: "16px",
      boxShadow: "1px 1px 3px 3px #C3B1E1",
      marginRight: "20px",
      fontSize: "20px",
      padding: "4px 4px 4px 10px",
    },
    link: {
      borderRadius: "10px",
      textDecoration: "none",
      backgroundColor: "#C3B1E1",
      padding: "15px 15px 15px 15px",
      fontSize: "18px",
    },
  };

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
  height: "5vh";
  width: "20vw";
  border: "none";
  border-radius: "16px";
  box-shadow: "1px 1px 3px 3px #C3B1E1";
  margin-right: "20px";
  font-size: "20px";
  padding: "4px 4px 4px 10px";
  `;

  
  return (
    <MainDiv>
      <InputDiv>
        <InputTag
          placeholder="Enter Flight Number"
          onChange={(e) => setFlightIata(e.target.value)}
          value={flightIata}
          style={styles.input}
        />
        <Link to="/flight-tracker" style={styles.link}>
          Submit
        </Link>
      </InputDiv>
      <div></div>
    </MainDiv>
  );
}
