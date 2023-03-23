// App.js

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function SuccessScreen() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        paddingTop: "10vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          width: 400,
          backgroundColor: "background.paper",
          boxShadow: 2,
          p: 2,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" align="center" mb={2}>
          Form submitted!
        </Typography>
        <Typography variant="h6" align="center" mb={2}>
          Thank you for booking a tour!
        </Typography>
        <Typography align="center">
          Your tour has been scheduled. We look forward to seeing you soon!
        </Typography>
      </Box>
    </div>
  );
}
