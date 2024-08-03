import React from "react";
import Logo from "../../Assets/Logo.jpg";
import { Box, Button, Stack, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        py: 2,
        // borderBottom: "1px solid",
        bgcolor: "rgb(245, 130, 32)",
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        {/* Logo and Title Section */}
        <Stack direction="row" alignItems="center" ml={10} spacing={2}>
          <img
            src={Logo}
            alt="Temple Logo"
            style={{ width: 70, borderRadius: "50%" }}
          />
          <Stack alignItems="center">
            <Typography
              sx={{
                fontFamily: "sans-serif",
                fontSize: 18,
                fontWeight: 600,
                color: "white",
              }}
            >
              Temple
            </Typography>
            <Typography
              sx={{
                fontFamily: "sans-serif",
                fontSize: 16,
                fontWeight: 600,
                color: "white",
              }}
            >
              Devasthanam
            </Typography>
          </Stack>
        </Stack>

        {/* Navigation Links Section */}
        <Stack direction="row" spacing={1} sx={{ mr: 5 }}>
          {["About", "Darshnam", "Sevas", "Gallery", "Login"].map((text) => (
            <Button
              key={text}
              sx={{
                fontWeight: 600,
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              {text}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
