import { Box, Stack, Typography, IconButton } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "grey.900", py: 2 }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        px={5}
      >
        <Stack direction="row" gap={1}>
          <IconButton
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon sx={{ fontSize: 40, color: "white" }} />
          </IconButton>
          <IconButton
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon sx={{ fontSize: 40, color: "white" }} />
          </IconButton>
          <IconButton
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon sx={{ fontSize: 40, color: "white" }} />
          </IconButton>
        </Stack>
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={1}
          >
            <CopyrightIcon sx={{ color: "white" }} />
            <Typography sx={{ color: "white" }}>2024 Devasthanam</Typography>
          </Stack>
        </Box>
        <Box sx={{ width: 72 }} />{" "}
        {/* Placeholder to keep spacing consistent */}
      </Stack>
    </Box>
  );
};

export default Footer;
