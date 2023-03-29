import React from "react";
import Typography from "@mui/material/Typography";

const SuccessScreen = () => {
  return (
    <div>
      <Typography variant="h5" align="center">
        Thank you for submitting your request.
      </Typography>
      <Typography variant="subtitle1" align="center">
        We will get back to you soon to confirm your tour date and time.
      </Typography>
    </div>
  );
};

export default SuccessScreen;
