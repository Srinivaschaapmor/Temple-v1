import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  styled,
} from "@mui/material";
import { Delete, Edit, Add } from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs"; // Import dayjs
import { eventsData } from "../../utilities/Data";

const StyledBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2),
}));

const EventsContainer = styled(Box)(({ theme }) => ({
  maxHeight: "400px",
  overflowY: "auto",
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
}));

const EventUpdates = () => {
  const [events, setEvents] = useState(eventsData);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    date: null,
    title: "",
    time: "",
    color: "",
    icon: "",
  });

  const handleOpenDialog = (type, event) => {
    setDialogType(type);
    setSelectedEvent(event);
    setNewEvent(
      event
        ? {
            ...event,
            date: event.date ? dayjs(event.date) : null,
          }
        : { date: null, title: "", time: "", color: "", icon: "" }
    );
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date) {
      const newDate = newEvent.date.format("YYYY-MM-DD"); // Format date for comparison
      const existingDay = events.find(
        (dayEvents) => dayEvents.date === newDate
      );

      if (existingDay) {
        const updatedEvents = events.map((dayEvents) =>
          dayEvents.date === newDate
            ? {
                ...dayEvents,
                events: [...dayEvents.events, { ...newEvent, date: newDate }],
              }
            : dayEvents
        );
        setEvents(updatedEvents);
      } else {
        setEvents([
          ...events,
          {
            date: newDate,
            day: newEvent.date.format("ddd"), // Format date to get the day name
            events: [{ ...newEvent, date: newDate }],
          },
        ]);
      }
      handleCloseDialog();
    }
  };

  const handleUpdateEvent = () => {
    if (newEvent.title && newEvent.date) {
      const updatedEvents = events.map((dayEvents) =>
        dayEvents.date === newEvent.date.format("YYYY-MM-DD")
          ? {
              ...dayEvents,
              events: dayEvents.events.map((event) =>
                event.title === selectedEvent.title
                  ? { ...newEvent, date: newEvent.date.format("YYYY-MM-DD") }
                  : event
              ),
            }
          : dayEvents
      );
      setEvents(updatedEvents);
      handleCloseDialog();
    }
  };

  const handleDeleteEvent = () => {
    const updatedEvents = events.map((dayEvents) =>
      dayEvents.date === selectedEvent.date
        ? {
            ...dayEvents,
            events: dayEvents.events.filter(
              (event) => event.title !== selectedEvent.title
            ),
          }
        : dayEvents
    );
    setEvents(updatedEvents.filter((dayEvents) => dayEvents.events.length > 0));
    handleCloseDialog();
  };

  return (
    <StyledBox>
      <EventsContainer>
        {events.map((dayEvents, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6">
              {dayjs(dayEvents.date).format("ddd, MMM D")}
            </Typography>
            <List>
              {dayEvents.events.map((event, i) => (
                <ListItem key={i}>
                  <ListItemIcon style={{ color: event.color }}>
                    {event.icon || "🎉"}
                  </ListItemIcon>
                  <ListItemText primary={event.title} secondary={event.time} />
                  <IconButton
                    edge="end"
                    color="primary"
                    onClick={() => handleOpenDialog("update", event)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    edge="end"
                    color="error"
                    onClick={() => handleOpenDialog("delete", event)}
                  >
                    <Delete />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </EventsContainer>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        onClick={() => handleOpenDialog("add")}
      >
        Add Event
      </Button>

      {/* Dialog for Add/Update/Delete */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {dialogType === "add"
            ? "Add New Event"
            : dialogType === "update"
            ? "Update Event"
            : "Delete Event"}
        </DialogTitle>
        <DialogContent>
          {dialogType === "delete" ? (
            <Typography>Are you sure you want to delete this event?</Typography>
          ) : (
            <Box>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date"
                  value={newEvent.date}
                  onChange={(date) => setNewEvent({ ...newEvent, date })}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth margin="dense" />
                  )}
                />
              </LocalizationProvider>
              <TextField
                margin="dense"
                label="Event Title"
                type="text"
                fullWidth
                variant="standard"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
                placeholder="Enter event title"
              />
              <TextField
                margin="dense"
                label="Event Time"
                type="text"
                fullWidth
                variant="standard"
                value={newEvent.time}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, time: e.target.value })
                }
                placeholder="Enter event time"
              />
              <TextField
                margin="dense"
                label="Color"
                type="text"
                fullWidth
                variant="standard"
                value={newEvent.color}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, color: e.target.value })
                }
                placeholder="Enter event color"
              />
              <TextField
                margin="dense"
                label="Icon"
                type="text"
                fullWidth
                variant="standard"
                value={newEvent.icon}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, icon: e.target.value })
                }
                placeholder="Enter event icon"
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          {dialogType === "delete" ? (
            <Button onClick={handleDeleteEvent} color="error">
              Delete
            </Button>
          ) : (
            <>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button
                onClick={
                  dialogType === "add" ? handleAddEvent : handleUpdateEvent
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

export default EventUpdates;
