import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
    >
      <Typography variant="h4">Unauthorized Access</Typography>
      <Typography variant="body1">
        You do not have permission to access this page.
      </Typography>
      <Button
        onClick={() => navigate("/")}
        variant="contained"
        color="primary"
        sx={{ mt: 5 }}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default Unauthorized;
