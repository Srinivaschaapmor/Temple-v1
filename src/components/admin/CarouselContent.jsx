// CarouselContent.js
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Input,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Carousel from "react-material-ui-carousel";
import { Delete, Edit, Add, CloudUpload } from "@mui/icons-material";

const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
}));

const UploadInput = styled(Input)(({ theme }) => ({
  display: "none",
}));

const CarouselContent = () => {
  const [images, setImages] = useState([
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState(null);
  const [newImage, setNewImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null);

  const handleOpenDialog = (type, image) => {
    setDialogType(type);
    setSelectedImage(image);
    setNewImage("");
    setFile(null);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddImage = () => {
    if (newImage) {
      setImages([...images, newImage]);
      handleCloseDialog();
    }
  };

  const handleDeleteImage = () => {
    setImages(images.filter((image) => image !== selectedImage));
    handleCloseDialog();
  };

  const handleUpdateImage = () => {
    if (newImage) {
      setImages(
        images.map((image) => (image === selectedImage ? newImage : image))
      );
      handleCloseDialog();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result);
        // Automatically add the uploaded image
        setImages([...images, reader.result]);
        handleCloseDialog();
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box>
      <Carousel>
        {images.map((image, index) => (
          <StyledCard key={index}>
            <CardMedia
              component="img"
              image={image}
              alt={`Image ${index + 1}`}
              sx={{ height: "400px", objectFit: "cover" }}
            />
            <CardContent sx={{ position: "absolute", top: 0, right: 0, p: 1 }}>
              <IconButton
                color="error"
                onClick={() => handleOpenDialog("delete", image)}
              >
                <Delete sx={{ color: "red" }} />
              </IconButton>
              {/* <IconButton
                color="primary"
                onClick={() => handleOpenDialog("update", image)}
              >
                <Edit />
              </IconButton> */}
            </CardContent>
          </StyledCard>
        ))}
      </Carousel>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        onClick={() => handleOpenDialog("add")}
      >
        Add Image
      </Button>

      {/* Dialog for Add/Update/Delete */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {dialogType === "add"
            ? "Add New Image"
            : dialogType === "update"
            ? "Update Image"
            : "Delete Image"}
        </DialogTitle>
        <DialogContent>
          {dialogType === "delete" ? (
            <Typography>Are you sure you want to delete this image?</Typography>
          ) : (
            <Box>
              <Typography variant="subtitle1" mb={2}>
                {dialogType === "add" ? "Upload Image" : "Update Image"}
              </Typography>
              <Box mb={2}>
                <label htmlFor="upload-file">
                  <Input
                    accept="image/*"
                    id="upload-file"
                    type="file"
                    onChange={handleFileChange}
                    sx={{ display: "none" }}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    component="span"
                    startIcon={<CloudUpload />}
                  >
                    Upload from Device
                  </Button>
                </label>
              </Box>
              <TextField
                autoFocus
                margin="dense"
                label="Image URL"
                type="text"
                fullWidth
                variant="standard"
                value={newImage}
                onChange={(e) => setNewImage(e.target.value)}
                placeholder="Or enter image URL here"
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          {dialogType === "delete" ? (
            <Button onClick={handleDeleteImage} color="error">
              Delete
            </Button>
          ) : (
            <>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button
                onClick={
                  dialogType === "add" ? handleAddImage : handleUpdateImage
                }
                color="primary"
              >
                {dialogType === "add" ? "Add" : "Update"}
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CarouselContent;
