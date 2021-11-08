
export default function SideBar() {
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
      fontSize: 40,
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
      display:"flex",
      justifyContent:"space-evenly"
    },
    flightInfoCardTableText:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between"
    },
    spanText: {
      fontSize:"18px",
      fontWeight:600,
      color:"white",
      paddingBottom:"10px"
    },
    speedAndAltitude: {
      display:"flex",
      justifyContent:"space-evenly",
      paddingTop:"200px",
      backgroundColor:"#E7F5F9",
      marginTop:"100px"
    },
    speed:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
      alignItems:"flex-start"
    },
    speedHeading: {
      fontSize:"16px",
      fontWeight:600,
      paddingBottom:"5px"
    },
    speedText:{
      fontSize:"32px",
      fontWeight:600,
      paddingBottom:"40px"
    },
    aircraftDetails:{
      padding:"10% 15%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-evenly",
      alignItems:"flex-start"
    },
    aircraftDetailsHeading:{
      fontSize:"28px",
      fontWeight:600,
      paddingBottom:"20px"
    },
    aircraftType: {
      fontSize:"20px",
      fontWeight:600,
      paddingBottom:"10px"
    },
    aircraftTypeName:{
      fontSize:"22px",
      paddingBottom:"30px"
    }
   

  };
  return (
    <div style={styles.flightInfo}>
      <div className="flight-origin-info" style={styles.flightOriginInfo}>
        <span className="flight-origin" style={styles.flightOrigin}>
          KLM (KL 0836) flight from{" "}
        </span>
        <span className="flight-origin-city" style={styles.flightOriginCity}>
          Singapore
        </span>
        <span className="flight-path-info" style={styles.flightPathInfo}>
          Singapore (SGP) - Denpasar (SPS)
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
            <span style={styles.spanText} >Date</span>
            <span  style={styles.spanText} >8 Jan</span>
          </div>
          <div style={styles.flightInfoCardTableText}>
            <span  style={styles.spanText} >Arrival Time</span>
            <span  style={styles.spanText} >16:20</span>
          </div>
          <div style={styles.flightInfoCardTableText}>
            <span  style={styles.spanText} >Flight Number</span>
            <span  style={styles.spanText} >KL 0836</span>
          </div>
          <div style={styles.flightInfoCardTableText}>
            <span  style={styles.spanText} >Arrivals</span>
            <span  style={styles.spanText} >2</span>
          </div>
        </div>
      </div>
      <div style={styles.speedAndAltitude}>
        <div className="flight-speed" style={styles.speed}>
          <span style={styles.speedHeading}>Speed</span>
          <span  style={styles.speedText}>910 KM/H</span>
        </div>
        <div className="flight-altitude" style={styles.speed}>
          <span  style={styles.speedHeading}>Altitude</span>
          <span  style={styles.speedText}>11.580m</span>
        </div>
      </div>
      <div className="aircraft-details" style={styles.aircraftDetails}>
        <span style={styles.aircraftDetailsHeading}>Aircraft details</span>
        <span style={styles.aircraftType}>Type</span>
        <span style={styles.aircraftTypeName}>Boeing 777-300ER (twin jet) </span>
        <span  style={styles.aircraftType}>Registration</span>
        <span style={styles.aircraftTypeName}>MV-VDG</span>
      </div>
    </div>
  );
}
