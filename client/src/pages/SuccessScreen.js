import React from "react";
import {Typography, Button} from "@mui/material/";
import { useNavigate } from "react-router-dom";

const SuccessScreen = () => {
  const navigate = useNavigate();

  return (
    <div style={{backgroundColor: "white", padding: 50, display: "flex", flexDirection: "column", justifyContent:"center"}}>
      <Typography variant="h4" align="center" sx={{marginBottom: 2}}>
        Thank you for submitting your request.
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{marginBottom: 5}}>
        We will get back to you soon to confirm your tour date and time.
      </Typography>
      <Button variant="contained" onClick={() => navigate("/")}>Return to Home Page</Button>
    </div>
  );
};

export default SuccessScreen;
