import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import underline from "../assets/underline.png";
import img2 from "../assets/img-2.png";

const data = {
  title: " Devasthanam",
  menuItems: [
    { text: "Main Temple", icon: <AddCircleOutlineIcon /> },
    { text: "Dwaralu", icon: <AddCircleOutlineIcon /> },
    { text: "Upa Dwaralu", icon: <AddCircleOutlineIcon /> },
    { text: "Utsava Murthulu", icon: <AddCircleOutlineIcon /> },
    { text: "Shiva Deeksha", icon: <AddCircleOutlineIcon /> },
    { text: " Prabha", icon: null },
    { text: " Khandam", icon: null },
  ],
  aboutTitle: "About  Devasthanam",
  content: [
    "When Goddess Parvati asked Lord Shiva about his most desired place apart from Kailasa in the Universe created by him, he chose the eternally beautiful place nestled among picturesque nature, the avatar of Sri Chakra, the holy m. In such a significant location, Shiva-Shakti take the form of Sri Mallikarjuna Bhramaramba to bless all their devotees.",
    "As proven in Puranas, m has great ancient significance. Among the 12 Jyotirlingas, the 2nd is the Mallikarjuna Swamy Lingam; among the 18 Maha Shakti Peethas, the 6th is Sri Bhramaramba Devi temple. m is the only temple where two such icons exist under one temple premise, such is its significance. m has many other names like Srigiri, Sirigiri, Sriparvatam and Srinagatam. Narasimhaswamy in Satyayugam, Sri Rama alongside Sita Devi in Tretayugam, all five Pandavas in Dvaparayugam, many Yogis, Rishis, Munis, preachers, spiritual teachers, Kings, poets and devotees in Kalyug have visited m and earned the blessings of Sri Bhramarambika Devi and Mallikarjuna Swamy.",
  ],
};

const About = () => {
  return (
    <Box display="flex" p={5}>
      {/* Side Navigation */}
      <Box width="25%" bgcolor="#f5f5f5" p={2}>
        <List>
          <ListItem>
            <ListItemText
              primary={data.title}
              primaryTypographyProps={{ fontWeight: "bold", color: "orange" }}
            />
          </ListItem>
          {data.menuItems.map((item, index) => (
            <ListItem button key={index}>
              <ListItemText primary={item.text} />
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Main Content */}
      <Box width="75%" pl={4}>
        <Stack alignItems={"center"} spacing={2} mb={4}>
          <Typography
            variant="h4"
            color={"rgb(47, 49, 147)"}
            textAlign={"center"}
            sx={{ fontWeight: "bold" }}
          >
            {data.aboutTitle}
          </Typography>
          <img
            src={underline}
            alt="underline"
            style={{ width: 150, margin: "0 auto" }}
          />
        </Stack>

        <Box textAlign="center">
          <img
            src={img2}
            style={{
              width: "80%",
              height: "50%",
              borderRadius: "8px",
            }}
          />
          {data.content.map((paragraph, index) => (
            <Typography
              variant="body1"
              mt={2}
              key={index}
              fontFamily={"serif"}
              textAlign={"justify"}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default About;
