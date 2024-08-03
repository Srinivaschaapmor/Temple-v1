import { Box, IconButton, Grid, Typography } from "@mui/material";
import React from "react";
import Seva from "../../assets/SEVA_WEB_ICON.svg";

const items = [
  { name: "Item 1", img: Seva },
  { name: "Item 2", img: Seva },
  { name: "Item 3", img: Seva },
  { name: "Item 4", img: Seva },
  { name: "Item 5", img: Seva },
  { name: "Item 6", img: Seva },
  { name: "Item 7", img: Seva },
  { name: "Item 8", img: Seva },
];

const PiligramServices = () => {
  return (
    <Box bgcolor={"white"} p={3} borderRadius={5}>
      <Box height={40}>
        <Typography variant="h6" color={"rgb(85, 83, 159)"} fontWeight={600}>
          Piligram Services
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2} justifyContent="space-evenly">
          {items.map((item) => (
            <Grid item xs={6} sm={3} key={item.name}>
              <Box textAlign="center">
                <IconButton>
                  <Box
                    sx={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </IconButton>
                <Typography>{item.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PiligramServices;
