import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CarouselComponent from "../components/common/CarouselComponent";
import EventUpdates from "../components/home/EventUpdates";
import LatestUpdates from "../components/home/LatestUpdates";
import PiligramServices from "../components/home/PiligramServices";
import Gallery from "../components/home/Gallery";
import SubscribeNewsletter from "../components/home/SubscribeNewsletter";
import FaceBookPage from "../components/home/FaceBookPage";
import TodaysPanchangam from "../components/home/TodaysPanchangam";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box sx={{ bgcolor: "rgb(239, 239, 239)", pb: 5, px: 5 }}>
      {/* <InformationMarquee /> */}
      {/* <TodaysPanchangam />{" "} */}
      <Grid
        mt={0}
        container
        spacing={3}
        sx={{
          height: "100%",
          borderRadius: 2,
          overflow: "hidden",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12}>
          <CarouselComponent />
        </Grid>
      </Grid>
      <Box mt={2}>
        <Grid container justifyContent="center" gap={5}>
          <Grid xs={4}>
            <EventUpdates />
          </Grid>
          <Grid xs={7.5}>
            <PiligramServices />
          </Grid>
          <Grid xs={3}>
            <FaceBookPage />
          </Grid>
          <Grid xs={4}>
            <Link to={"/gallery"}>
              <Gallery />
            </Link>
          </Grid>
          <Grid xs={4}>
            <LatestUpdates />
          </Grid>
          <Grid xs={12}>
            <SubscribeNewsletter />
          </Grid>
        </Grid>
      </Box>
      {/* <Login /> */}
    </Box>
  );
};

export default Home;
{
  /* <Grid xs={4} mt={4}>
<EventUpdates />
</Grid>

<Grid xs={4}>
<LatestUpdates />
</Grid>

<Grid xs={6}>
<PiligramServices />
</Grid>
<Grid xs={4}>
<Gallery />
</Grid>
<Grid xs={10}>
<SubscribeNewsletter />
</Grid>
<Grid xs={10}>
<FaceBookPage />
</Grid> */
}
