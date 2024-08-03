import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import NewTag from "../../assets/NewTag.svg";

const updates = [
  {
    id: 1,
    date: "29-07-2024",
    title: "Update 1",
    details: "Details about update 1.",
  },
  {
    id: 2,
    date: "29-07-2024",
    title: "Update 2",
    details: "Details about update 2.",
  },
  {
    id: 3,
    date: "29-07-2024",
    title: "Update 3",
    details: "Details about update 3.",
  },
  {
    id: 4,
    date: "29-07-2024",
    title: "Update 4",
    details: "Details about update 4.",
  },
  {
    id: 5,
    date: "29-07-2024",
    title: "Update 5",
    details: "Details about update 5.",
  },
  {
    id: 6,
    date: "29-07-2024",
    title: "Update 6",
    details: "Details about update 6.",
  },
];

const LatestUpdates = () => {
  return (
    <Box bgcolor={"white"} height={"300px"} borderRadius={5} p={3}>
      <Typography variant="h6" color={"rgb(85, 83, 159)"} fontWeight={600}>
        Latest Updates
      </Typography>
      <Box
        mt={2}
        height={"calc(100% - 40px)"} // Adjust height to fit within the parent container
        sx={{
          overflowY: "auto", // Changed from "scroll" to "auto"
          scrollbarWidth: "thin", // Provides a thin scrollbar for better aesthetics
          "&::-webkit-scrollbar": {
            width: "8px", // Adjust width of scrollbar for WebKit browsers
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888", // Color of the scrollbar thumb
            borderRadius: "4px", // Rounded corners for the scrollbar thumb
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1", // Background of the scrollbar track
          },
        }}
      >
        <Stack spacing={2}>
          {updates.map((update) => (
            <Stack
              key={update.id}
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <img
                src={NewTag}
                alt="New Tag"
                style={{ width: 25, height: 25 }}
              />
              <Box>
                <Typography fontWeight={600}>{update.title}</Typography>
                <Typography variant="body2">{update.details}</Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default LatestUpdates;
