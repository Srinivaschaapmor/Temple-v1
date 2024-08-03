import React, { useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./utilities/ProtectedRoute"; // Import ProtectedRoute

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Sevas from "./pages/Sevas";
import Darshanam from "./pages/Darshanam";
import Admin from "./pages/Admin";
import Unauthorized from "./utilities/Unauthorised";
import AdminProtectedRoute from "./utilities/AdminProtectedRoute";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/sevas" element={<Sevas />} />
            <Route path="/darshanam" element={<Darshanam />} />
          </Route>
          {/* Protected route with header and footer */}
          <Route element={<AdminProtectedRoute />}>
            <Route path="/admin" element={<Admin />} />
          </Route>

          {/* Unauthorized route */}
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
