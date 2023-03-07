import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import { DatePicker, TimePicker } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  field: {
    margin: theme.spacing(1),
  },
}));

function ContactForm() {
  const classes = useStyles();

  return (
    <form className={classes.form}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            required
            className={classes.field}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="address"
            label="Address"
            variant="outlined"
            fullWidth
            required
            className={classes.field}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="phone"
            label="Phone"
            variant="outlined"
            fullWidth
            required
            className={classes.field}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="message"
            label="Message"
            variant="outlined"
            fullWidth
            required
            className={classes.field}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePicker
            label="Date"
            inputVariant="outlined"
            fullWidth
            required
            className={classes.field}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TimePicker
            label="Time"
            inputVariant="outlined"
            fullWidth
            required
            className={classes.field}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.field}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default ContactForm;
