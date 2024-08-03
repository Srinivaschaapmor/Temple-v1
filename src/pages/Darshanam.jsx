import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import commingSoon from "../assets/commingsoon.png";
import underline from "../assets/underline.png";
const Darshanam = () => {
  return (
    <Box height={"100vh"} p={3}>
      <Stack alignItems={"center"} spacing={2} mb={4}>
        <Typography
          variant="h4"
          color={"rgb(47, 49, 147)"}
          textAlign={"center"}
          sx={{ fontWeight: "bold" }}
        >
          Darshanam
        </Typography>
        <img
          src={underline}
          alt="underline"
          style={{ width: 150, margin: "0 auto" }}
        />
      </Stack>
      <Stack alignItems={"center"}>
        <img src={commingSoon} style={{ width: "50%" }}></img>
      </Stack>
    </Box>
  );
};

export default Darshanam;
