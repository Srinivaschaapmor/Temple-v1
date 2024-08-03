import {
  Box,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";

const SubscribeNewsletter = () => {
  return (
    <Box
      sx={{
        bgcolor: "rgb(47, 50, 147)",
        borderRadius: 5,
        p: 2,
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" color="white" fontWeight={600} ml={10}>
            Subscribe to our Newsletter
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            placeholder="Enter WhatsApp number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <WhatsAppIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <ArrowForwardIosIcon />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                bgcolor: "white",
                borderRadius: 5,
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SubscribeNewsletter;
