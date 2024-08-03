import React from "react";
import { Box, Container } from "@mui/material";
import Header from "../components/header/Header";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import TodaysPanchangam from "../components/home/TodaysPanchangam";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <TodaysPanchangam />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default ProtectedRoute;
