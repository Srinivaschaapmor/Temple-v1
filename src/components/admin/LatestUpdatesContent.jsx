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
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  styled,
} from "@mui/material";
import { Delete, Edit, Add } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { updatesData } from "../../utilities/Data";

const StyledBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2),
}));

const UpdatesContainer = styled(Box)(({ theme }) => ({
  maxHeight: "400px",
  overflowY: "auto",
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
}));

const LatestUpdates = () => {
  const [updates, setUpdates] = useState(updatesData);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState(null);
  const [selectedUpdate, setSelectedUpdate] = useState(null);
  const [newUpdate, setNewUpdate] = useState({
    id: null,
    date: null,
    title: "",
    details: "",
  });

  const handleOpenDialog = (type, update) => {
    setDialogType(type);
    setSelectedUpdate(update);
    setNewUpdate(
      update
        ? {
            ...update,
            date: update.date ? new Date(update.date) : null,
          }
        : { id: Date.now(), date: null, title: "", details: "" }
    );
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddUpdate = () => {
    if (newUpdate.title && newUpdate.date) {
      setUpdates([
        ...updates,
        { ...newUpdate, date: newUpdate.date.toLocaleDateString() },
      ]);
      handleCloseDialog();
    }
  };

  const handleUpdateUpdate = () => {
    if (newUpdate.title && newUpdate.date) {
      setUpdates(
        updates.map((update) =>
          update.id === selectedUpdate.id
            ? { ...newUpdate, date: newUpdate.date.toLocaleDateString() }
            : update
        )
      );
      handleCloseDialog();
    }
  };

  const handleDeleteUpdate = () => {
    setUpdates(updates.filter((update) => update.id !== selectedUpdate.id));
    handleCloseDialog();
  };

  return (
    <StyledBox>
      <UpdatesContainer>
        <List>
          {updates.map((update) => (
            <ListItem key={update.id}>
              <ListItemText
                primary={update.title}
                secondary={`${update.date} - ${update.details}`}
              />
              <IconButton
                edge="end"
                color="primary"
                onClick={() => handleOpenDialog("update", update)}
              >
                <Edit />
              </IconButton>
              <IconButton
                edge="end"
                color="error"
                onClick={() => handleOpenDialog("delete", update)}
              >
                <Delete />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </UpdatesContainer>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        onClick={() => handleOpenDialog("add")}
      >
        Add Update
      </Button>

      {/* Dialog for Add/Update/Delete */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {dialogType === "add"
            ? "Add New Update"
            : dialogType === "update"
            ? "Update Update"
            : "Delete Update"}
        </DialogTitle>
        <DialogContent>
          {dialogType === "delete" ? (
            <Typography>
              Are you sure you want to delete this update?
            </Typography>
          ) : (
            <Box>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date"
                  value={newUpdate.date}
                  onChange={(date) => setNewUpdate({ ...newUpdate, date })}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth margin="dense" />
                  )}
                />
              </LocalizationProvider>
              <TextField
                margin="dense"
                label="Title"
                type="text"
                fullWidth
                variant="standard"
                value={newUpdate.title}
                onChange={(e) =>
                  setNewUpdate({ ...newUpdate, title: e.target.value })
                }
                placeholder="Enter update title"
              />
              <TextField
                margin="dense"
                label="Details"
                type="text"
                fullWidth
                variant="standard"
                value={newUpdate.details}
                onChange={(e) =>
                  setNewUpdate({ ...newUpdate, details: e.target.value })
                }
                placeholder="Enter update details"
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          {dialogType === "delete" ? (
            <Button onClick={handleDeleteUpdate} color="error">
              Delete
            </Button>
          ) : (
            <>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button
                onClick={
                  dialogType === "add" ? handleAddUpdate : handleUpdateUpdate
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

export default LatestUpdates;
