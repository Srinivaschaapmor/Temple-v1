import React, { useState } from "react";
import Logo from "../../assets/Logo.jpg";
import Cookies from "js-cookie";
import {
  Box,
  Button,
  Stack,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import Login from "../login/Login";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogout = () => {
    Cookies.remove("userLoggedIn");
    window.location.reload(); // Refresh the page to update the UI
  };

  // Check if user is logged in
  const isLoggedIn = Cookies.get("userLoggedIn");

  // Define navigation links
  const navLinks = [
    { text: "About", path: "/about" },
    { text: "Darshanam", path: "/darshanam" },
    { text: "Sevas", path: "/sevas" },
    { text: "Gallery", path: "/gallery" },
  ];

  return (
    <Box
      sx={{
        py: 2,
        bgcolor: "rgb(245, 130, 32)",
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        {/* Logo and Title Section */}
        <IconButton
          onClick={() => navigate("/")}
          sx={{ ":hover": { bgcolor: "transparent" } }}
        >
          {" "}
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
        </IconButton>

        {/* Navigation Links Section */}
        <Stack direction="row" spacing={1} sx={{ mr: 5 }}>
          {navLinks.map((link) => (
            <Button
              key={link.text}
              component={NavLink}
              to={link.path}
              sx={{
                fontWeight: 600,
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              {link.text}
            </Button>
          ))}

          {isLoggedIn ? (
            <>
              <Button
                sx={{
                  fontWeight: 600,
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  },
                }}
                onClick={() => navigate("/admin")}
              >
                Admin
              </Button>
              <Button
                sx={{
                  fontWeight: 600,
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  },
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              sx={{
                fontWeight: 600,
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
              onClick={handleOpen} // Open modal on click
            >
              Login
            </Button>
          )}
        </Stack>
      </Stack>

      {/* Pass state and functions to Login component */}
      <Login open={open} handleClose={handleClose} />
    </Box>
  );
};

export default Header;
