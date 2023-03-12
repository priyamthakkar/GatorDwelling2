import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';




export default function Book() {
  // Get the ID of the apartment complex from the URL
  const { id } = useParams();

  // Use the useNavigate hook to redirect the user after form submission
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  
    time: "",
    message: "",
  });
  
  

  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data to the server
    console.log(formData);
    // Reset the form data
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Navigate to the success page
    navigate("/success");
  };

  function BoxSx() {
    return (
      <Box
        sx={{
          width: 400,
          backgroundColor: "background.default",
          boxShadow: 2,
          p: 2,
          height: 500,
          backgroundImage: "url('dark_alight.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",

        }}
        
      >
        <Typography variant="h5" align="center" mb={2}>
          Schedule a tour
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
         
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Phone"
                name="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
          
           
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleInputChange}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                multiline
                rows={4}
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    );
  }

  return (
    <div>
      <Typography variant="h4" align="center" mb={4}>
        Book an Apartment at Complex {id}
      </Typography>
      <BoxSx />
    </div>
  );
}

