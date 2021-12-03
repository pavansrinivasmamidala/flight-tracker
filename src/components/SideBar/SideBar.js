// eslint-disable-next-line no-unused-vars
import useFetch from "react-fetch-hook";

export default function SideBar(props) {
  //const {isLoading, error, sideBarData} =  useFetch(`https://aviation-edge.com/v2/public/cityDatabase?key=c75eac-812e66&codeIataCity=${data.props.data[0].departure.iataCode}`)

  // console.log(sideBarData)
  const flightData = props.flightData;
  const originData = props.originData;
  const destinationData = props.destinationData;
  const countryData = props.countryData;

  const styles = {
    flightInfo: {
      backgroundColor: "white",
      float: "right",
      marginRight: 0,
      width: "30%",
      height: "100%",
      zIndex: 10,
      top: 0,
      right: 0,
      position: "absolute",
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    },
    flightOriginInfo: {
      padding: "10% 15%",
      position: "relative",
      display: "flex",
      flexDirection: "column",
    },
    flightOrigin: {
      fontSize: 16,
    },
    flightOriginCity: {
      fontSize: 46,
      fontWeight: "bold",
      paddingTop: "10px",
    },
    flightPathInfo: {
      fontSize: 16,
      fontWeight: 600,
      paddingTop: "10px",
    },
    flightInfoCard: {
      backgroundColor: "#8A6FB5",
      right: 120,
      position: "absolute",
      height: "25vh",
      width: "30vw",
      zIndex: 20,
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      borderRadius: 15,
    },
    flightInfoCardHeading: {
      fontSize: 26,
      color: "white",
      fontWeight: "bold",
      padding: "8% 15%",
    },
    flightInfoCardHeadingDiv: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
    },
    flightInfoCardTableDiv: {
      display: "flex",
      justifyContent: "space-evenly",
    },
    flightInfoCardTableText: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    spanText: {
      fontSize: "18px",
      fontWeight: 600,
      color: "white",
      paddingBottom: "10px",
    },
    speedAndAltitude: {
      display: "flex",
      justifyContent: "space-evenly",
      paddingTop: "200px",
      backgroundColor: "#E7F5F9",
      marginTop: "100px",
    },
    speed: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    speedHeading: {
      fontSize: "16px",
      fontWeight: 600,
      paddingBottom: "5px",
    },
    speedText: {
      fontSize: "32px",
      fontWeight: 600,
      paddingBottom: "40px",
    },
    aircraftDetails: {
      padding: "10% 15%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "flex-start",
    },
    aircraftDetailsHeading: {
      fontSize: "28px",
      fontWeight: 600,
      paddingBottom: "20px",
    },
    aircraftType: {
      fontSize: "18px",
      fontWeight: 600,
      paddingBottom: "10px",
    },
    aircraftTypeName: {
      fontSize: "18px",
      paddingBottom: "30px",
    },
  };

  return (
    <div style={styles.flightInfo}>
      <div className="flight-origin-info" style={styles.flightOriginInfo}>
        <span className="flight-origin" style={styles.flightOrigin}>
          {flightData?.data[0]?.departure?.iataCode || "Loading Iata code"} ({flightData?.data[0]?.flight?.iataNumber  || "Loading Iata"}) flight from 
        </span>
        <span className="flight-origin-city" style={styles.flightOriginCity}>
          {originData?.data?.[0]?.nameCity}
        </span>
        <span className="flight-path-info" style={styles.flightPathInfo}>
          {originData?.data[0]?.nameCity} (
          {flightData?.data[0]?.departure?.iataCode || "Loading Dep Iata Code"} ) - Denpasar (
          {flightData?.data[0]?.arrival?.iataCode  || "Loading Dep Iata Code"})
        </span>
      </div>
      <div className="flight-info-card" style={styles.flightInfoCard}>
        <div style={styles.flightInfoCardHeadingDiv}>
          <span
            className="flight-info-card-heading"
            style={styles.flightInfoCardHeading}
          >
            Flight Information
          </span>
        </div>
        <div style={styles.flightInfoCardTableDiv}>
          <div style={styles.flightInfoCardTableText}>
            <span style={styles.spanText}>Date</span>
            <span style={styles.spanText}>8 Jan</span>
          </div>
          <div style={styles.flightInfoCardTableText}>
            <span style={styles.spanText}>Arrival Time</span>
            <span style={styles.spanText}>16:20</span>
          </div>
          <div style={styles.flightInfoCardTableText}>
            <span style={styles.spanText}>Flight Number</span>
            <span style={styles.spanText}>
              {flightData?.data[0]?.flight?.iataNumber || "Loading Iata Num"}
            </span>
          </div>
          <div style={styles.flightInfoCardTableText}>
            <span style={styles.spanText}>Arrivals</span>
            <span style={styles.spanText}>2</span>
          </div>
        </div>
      </div>
      <div style={styles.speedAndAltitude}>
        <div className="flight-speed" style={styles.speed}>
          <span style={styles.speedHeading}>Speed</span>
          <span style={styles.speedText}>
            {flightData?.data[0]?.speed?.horizontal || "Loading Speed"} KM/H
          </span>
        </div>
        <div className="flight-altitude" style={styles.speed}>
          <span style={styles.speedHeading}>Altitude</span>
          <span style={styles.speedText}>
            {flightData?.data[0]?.geography?.altitude || "Loading altitude"}m
          </span>
        </div>
      </div>
      <div className="aircraft-details" style={styles.aircraftDetails}>
        <span style={styles.aircraftDetailsHeading}>Aircraft details</span>
        <span style={styles.aircraftType}>Type</span>
        <span style={styles.aircraftTypeName}>
          Boeing 777-300ER (twin jet){" "}
        </span>
        <span style={styles.aircraftType}>Registration</span>
        <span style={styles.aircraftTypeName}>
          {flightData?.data[0]?.aircraft?.regNumber || "Loading req num"}
        </span>
      </div>
    </div>
  );
}
