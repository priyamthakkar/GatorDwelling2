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
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Main = styled((props) => <MuiBox component="main" {...props} />)(
  ({ theme }) => ({
    marginLeft: 284,
  })
);

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 40.73061,
  lng: -73.935242,
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
                ></GoogleMap>
              </LoadScript>
            </Grid>
          </Grid>
        )}
      </Main>
    </>
  );
}
