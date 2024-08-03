import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Sunrise icon
import Brightness3Icon from "@mui/icons-material/Brightness3"; // Sunset icon
import StarIcon from "@mui/icons-material/Star";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const TodaysPanchangam = () => {
  const today = new Date();
  const date = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const nakshatra = " Uttara Bhadra";
  const thiti = " Krishna - Shasti"; // Replace with actual Nakshatra Thiti data
  const sunrise = "6:00 AM";
  const sunset = "6:00 PM";

  return (
    <Box bgcolor="whitesmoke" p={1} borderRadius={2}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography fontSize={15} fontWeight={600} color={"rgb(245, 131, 34)"}>
          Today's Panchangam
        </Typography>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Box
          component="marquee"
          direction="left"
          sx={{
            display: "flex",
            alignItems: "center",
            px: 2, // Padding on left and right
            flex: 1, // Allow the marquee to take up remaining space
          }}
        >
          <Stack direction={"row"} alignItems={"center"}>
            <Typography
              fontSize={15}
              sx={{ mx: 2, display: "flex", alignItems: "center", gap: 1 }}
            >
              {/* 📅 */}

              <CalendarMonthIcon sx={{ color: "rgb(245, 130, 32)" }} />
              {date}
            </Typography>

            <Typography
              variant="body1"
              sx={{ mx: 2, display: "flex", alignItems: "center", gap: 1 }}
            >
              🌙 {thiti}
            </Typography>
            <Typography
              variant="body1"
              sx={{ mx: 2, display: "flex", alignItems: "center", gap: 1 }}
            >
              <StarIcon sx={{ color: "rgb(245, 130, 32)" }} /> {nakshatra}
            </Typography>
            <Typography
              variant="body1"
              sx={{ mx: 2, display: "flex", alignItems: "center", gap: 1 }}
            >
              <WbSunnyIcon sx={{ color: "rgb(245, 130, 32)" }} /> Sunrise:{" "}
              {sunrise}
            </Typography>
            <Typography
              variant="body1"
              sx={{ mx: 2, display: "flex", alignItems: "center", gap: 1 }}
            >
              <Brightness3Icon sx={{ color: "rgb(245, 130, 32)" }} /> Sunset:{" "}
              {sunset}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default TodaysPanchangam;
