import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Toolbar,
  Box,
  Typography,
} from "@mui/material";
import MuiBox from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Filter from "../components/filter";
import DwellingCard from "../components/card";
import useService from "../services/homeService";
import Loading from "../components/loading";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Main = styled((props) => <MuiBox component="main" {...props} />)(
  ({ theme }) => ({
    marginLeft: 284,
  })
);

const mapContainerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 29.6516,
  lng: -82.3248,
<<<<<<< HEAD
=======
};

const position = {
  lat: 29.636611,
  lng: -82.385114,
  title: "The ridge"
};
const position2 = {
  lat: 29.6578,
  lng: -82.3383,
  title: "Alight Gainesville"
};
const position3 = {
  lat: 29.636344,
  lng: -82.361255,
  title: "University club apartments",
};
const position4 = {
  lat: 29.648981,
  lng: -82.328169,
  title: "Social 28",
};
const position5 = {
  lat: 29.647769,
  lng: -82.331044,
  title: "royal gainesville",
};
const position6 = {
  lat: 29.650021,
  lng: -82.341122,
  title: "Lark gainesville",
};

const position7 = {
  lat: 29.644097,
  lng: -82.341101,
  title: "The Standard",
};

const position8 = {
  lat: 29.639414,
  lng: -82.368559,
  title: "Lexington Crossing",
>>>>>>> 8bfcd7153d34f75357f72cf568065283cb339480
};


const YOUR_API_KEY = "AIzaSyDKLPXnCEYJsHJBAHTLI4MP3Zy0m56k_BY";

export default function Home() {
  const [dwellings, loading, setDwellings, recovery] = useService();
  const [sortby, setSortby] = useState("Reviews");

  return (
    <>
      <Filter dwellings={dwellings} setDwellings={setDwellings} />
      <Main>
        {loading ? (
          <Loading />
        ) : (
          <Grid container>
            <Grid item xs={12}>
              <Toolbar />
            </Grid>
            <Grid item xs={6} sx={{ padding: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      width: "100%",
                    }}
                  >
                    <FormControl size="small">
                      <InputLabel>Sort By</InputLabel>
                      <Select
                        value={sortby}
                        label="Sort By"
                        onChange={(e) => setSortby(e.target.value)}
                      >
                        <MenuItem value={"Reviews"}>Reviews</MenuItem>
                        <MenuItem value={"Newest"}>Newest</MenuItem>
                        <MenuItem value={"Oldest"}>Oldest</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                {dwellings.length > 0 ? (
                  dwellings.map((d) => (
                    <Grid item xs={6}>
                      <DwellingCard dwelling={d} />
                    </Grid>
                  ))
                ) : (
                  <Typography
                    variant="h5"
                    sx={{ minHeight: 445, marginLeft: 10, marginTop: 5 }}
                  >
                    No results that match your search
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <LoadScript googleMapsApiKey={YOUR_API_KEY}>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  zoom={12}
                  center={center}
                >
                  <Marker position={position} />
                  <Marker position={position2} />
                  <Marker position={position3} />
                  <Marker position={position4} title={position4.title} />
  <Marker position={position5} title={position5.title} />
  <Marker position={position6} title={position6.title} />
  <Marker position={position7} title={position7.title} />
  <Marker position={position8} title={position8.title} />
                </GoogleMap>
              </LoadScript>
            </Grid>
          </Grid>
        )}
      </Main>
    </>
  );
}
