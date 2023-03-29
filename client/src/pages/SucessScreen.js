import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const SuccessScreen = ({ styles }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          ...styles, // spread the styles object to apply them to the Paper component
          width: "80%",
          maxWidth: 400,
          p: 2,
          borderRadius: 2,
        }}
      >
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5" align="center" mb={2}>
              Thank you for submitting your request.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" align="center">
              We will get back to you soon to confirm your tour date and time.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default SuccessScreen;
