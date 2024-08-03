import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Delete, Edit, Add, PhotoCamera } from "@mui/icons-material";

const StyledBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2),
}));

const GalleryContainer = styled(Box)(({ theme }) => ({
  maxHeight: "400px",
  overflowY: "auto",
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(2),
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "150px",
  height: "150px",
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
}));

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

const GalleryContent = () => {
  const [images, setImages] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [newImage, setNewImage] = useState({
    url: "",
    alt: "",
  });
  const [file, setFile] = useState(null);

  const handleOpenDialog = (type, image) => {
    setDialogType(type);
    setSelectedImage(image);
    setNewImage(image || { url: "", alt: "" });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setFile(null);
  };

  const handleAddImage = () => {
    if (newImage.url) {
      setImages([...images, newImage]);
      handleCloseDialog();
    }
  };

  const handleUpdateImage = () => {
    if (newImage.url) {
      setImages(
        images.map((img) => (img.url === selectedImage.url ? newImage : img))
      );
      handleCloseDialog();
    }
  };

  const handleDeleteImage = () => {
    setImages(images.filter((img) => img.url !== selectedImage.url));
    handleCloseDialog();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage({ ...newImage, url: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <StyledBox>
      <GalleryContainer>
        {images.map((image, index) => (
          <ImageContainer key={index}>
            <Image src={image.url} alt={image.alt} />
            <Box
              position="absolute"
              bottom={0}
              right={0}
              display="flex"
              flexDirection="column"
              alignItems="center"
              bgcolor="rgba(0, 0, 0, 0.5)"
              p={1}
            >
              <IconButton
                color="primary"
                onClick={() => handleOpenDialog("update", image)}
              >
                <Edit />
              </IconButton>
              <IconButton
                color="error"
                onClick={() => handleOpenDialog("delete", image)}
              >
                <Delete />
              </IconButton>
            </Box>
          </ImageContainer>
        ))}
      </GalleryContainer>
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
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="file-upload"
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="file-upload">
                <Button
                  variant="outlined"
                  color="primary"
                  component="span"
                  startIcon={<PhotoCamera />}
                >
                  Upload Image
                </Button>
              </label>
              {newImage.url && (
                <Box mt={2} textAlign="center">
                  <img
                    src={newImage.url}
                    alt={newImage.alt}
                    style={{ maxWidth: "100%", maxHeight: "200px" }}
                  />
                </Box>
              )}
              <TextField
                margin="dense"
                label="Image Alt Text"
                type="text"
                fullWidth
                variant="standard"
                value={newImage.alt}
                onChange={(e) =>
                  setNewImage({ ...newImage, alt: e.target.value })
                }
                placeholder="Enter image alt text"
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
    </StyledBox>
  );
};

export default GalleryContent;
