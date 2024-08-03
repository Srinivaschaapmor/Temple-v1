import {
  Box,
  FormControl,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const eventsData = [
  {
    date: "01",
    day: "SUN",
    events: [
      { title: "Abhishekam", time: "", color: "blue", icon: "🕉️" },
      { title: "New Year's Day", time: "", color: "green" },
    ],
  },
  {
    date: "02",
    day: "MON",
    events: [{ title: "Kalyanam", time: "3 - 4 PM", color: "grey" }],
  },
  {
    date: "03",
    day: "TUE",
    events: [
      { title: "Product Sync", time: "2.30 - 4.30 PM", color: "lightblue" },
      { title: "Dribbble Training", time: "4.30 - 6.30 PM", color: "pink" },
    ],
  },
  {
    date: "04",
    day: "WED",
    events: [{ title: "Dashboard Discussion", time: "", color: "grey" }],
  },
  {
    date: "05",
    day: "THU",
    events: [{ title: "Abhishekam", time: "10 AM", color: "blue", icon: "🕉️" }],
  },
  {
    date: "06",
    day: "FRI",
    events: [{ title: "Kalyanam", time: "11 AM", color: "purple" }],
  },
  {
    date: "07",
    day: "SAT",
    events: [
      { title: "Abhishekam", time: "9 AM", color: "orange", icon: "🕉️" },
      { title: "Kalyanam", time: "5 PM", color: "red" },
    ],
  },
];

const EventUpdates = () => {
  const [selectedDate, setSelectedDate] = useState("Aug 2024");

  const handleChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <Box
      borderRadius={5}
      bgcolor={"white"}
      p={2}
      maxHeight={380}
      sx={{
        overflowY: "scroll",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h6" color={"rgb(85, 83, 159)"} fontWeight={600}>
          Future Events
        </Typography>
        <FormControl variant="outlined">
          <Select
            value={selectedDate}
            onChange={handleChange}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            <MenuItem value="Aug 2024">Aug 2024</MenuItem>
            <MenuItem value="Sept 2024">Sept 2024</MenuItem>
            <MenuItem value="Oct 2024">Oct 2024</MenuItem>
            <MenuItem value="Nov 2024">Nov 2024</MenuItem>
            <MenuItem value="Dec 2024">Dec 2024</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Box height="calc(100% - 50px)">
        <List>
          {eventsData.map((day, index) => (
            <Box key={index} display="flex" alignItems="flex-start" mb={2}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                width={50}
              >
                <Typography variant="h6">{day.date}</Typography>
                <Typography variant="caption">{day.day}</Typography>
              </Box>
              <Box flexGrow={1}>
                {day.events.map((event, idx) => (
                  <ListItem
                    key={idx}
                    sx={{
                      backgroundImage:
                        "linear-gradient(0.25turn, white, rgb(245, 130, 32))",
                      borderRadius: 1,
                      mb: 1,
                    }}
                  >
                    <ListItemText
                      primary={event.title}
                      secondary={event.time}
                    />
                    {event.icon && (
                      <Typography variant="body2" sx={{ ml: 2 }}>
                        {event.icon}
                      </Typography>
                    )}
                  </ListItem>
                ))}
              </Box>
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default EventUpdates;
