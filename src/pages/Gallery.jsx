import { Box, Grid, Typography, Modal, IconButton, Stack } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.jpg";
import underline from "../assets/underline.png";
const images = [
  img1,
  img2,
  img3,
  img1,
  img2,
  img3,
  img1,
  img2,
  img3,
  img1,
  img2,
  img3,
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage("");
  };

  return (
    <Box p={5}>
      <Stack alignItems={"center"}>
        <Typography
          variant="h4"
          color={"rgb(47, 49, 147)"}
          textAlign={"center"}
        >
          Photo Gallery
        </Typography>
        <img src={underline} style={{ width: 200 }}></img>
      </Stack>
      <Grid container spacing={4} mt={2}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "8px",
                height: "200px",
                width: "100%", // Make width responsive
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover img": {
                  transform: "scale(1.1)",
                },
                "&:hover": {
                  cursor: "pointer",
                },
                transition: "transform 0.3s ease-in-out",
              }}
              onClick={() => handleOpen(image)}
            >
              <img
                src={image}
                alt={`gallery-${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "90%",
            maxHeight: "99%",
          }}
        >
          <img
            src={selectedImage}
            alt="Selected"
            style={{
              width: "100%",
              // height: "auto",
              borderRadius: "8px",
              objectFit: "contain",
            }}
          />
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
};

export default Gallery;
