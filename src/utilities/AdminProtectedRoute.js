import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import TodaysPanchangam from "../components/home/TodaysPanchangam";
import Header from "../components/header/Header";
import { Box } from "@mui/material";
import Footer from "../components/footer/Footer";
const AdminProtectedRoute = () => {
  // Function to check if user is logged in
  const isLoggedIn = Cookies.get("userLoggedIn"); // Example cookie check, adjust as needed

  if (!isLoggedIn) {
    return <Navigate to="/unauthorized" />;
  }

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <TodaysPanchangam />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  ); // Render child route (Admin component)
};

export default AdminProtectedRoute;
