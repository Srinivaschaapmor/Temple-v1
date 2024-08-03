import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.png";
import img3 from "../../assets/img-3.jpg";
import img4 from "../../assets/img-2.jpg";

const Gallery = () => {
  return (
    <Box
      // border={"1px solid"}
      // height={"400px"}
      borderRadius={5}
      width={"400px"}
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <Grid container spacing={0}>
        <Grid item xs={6} p={0}>
          <Box
            component="img"
            src={img1}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="Gallery Image 1"
          />
        </Grid>
        <Grid item xs={6} p={0}>
          <Box
            component="img"
            src={img3}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="Gallery Image 2"
          />
        </Grid>
        <Grid item xs={6} p={0}>
          <Box
            component="img"
            src={img2}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="Gallery Image 3"
          />
        </Grid>
        <Grid item xs={6} p={0}>
          <Box
            component="img"
            src={img4}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="Gallery Image 4"
          />
        </Grid>
      </Grid>
      <Typography
        variant="h2"
        component="div"
        position="absolute"
        color="white"
        fontWeight="bold"
        textAlign="center"
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="rgb(134, 142, 190,0.4)" // Optional: Add background color to make text stand out
      >
        Gallery
      </Typography>
    </Box>
  );
};

export default Gallery;
