import React from "react";
import { Box, Container } from "@mui/material";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const ProtectedRoute = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};

export default ProtectedRoute;
