import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import underline from "../assets/underline.png";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.jpg";

const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};

const Sevas = () => {
  const blogData = [
    {
      image: img1,
      title: "Blog Title 1",
      description: "This is a short description of the blog post.",
    },
    {
      image: img2,
      title: "Blog Title 2",
      description: "This is a short description of the blog post.",
    },
    {
      image: img1,
      title: "Blog Title 1",
      description:
        "This is a short description of the blog post. This is a short description of the blog post. This is a short description of the blog post. This is a short description of the blog post. This is a short description of the blog post. This is a short description of the blog post. This is a short description of the blog post.",
    },
    {
      image: img2,
      title: "Blog Title 2",
      description: "This is a short description of the blog post.",
    },
    {
      image: img3,
      title: "Blog Title 2",
      description: "This is a short description of the blog post.",
    },
    {
      image: img1,
      title: "Blog Title 2",
      description: "This is a short description of the blog post.",
    },
    // Add more blog posts here
  ];

  return (
    <Box
      px={5}
      py={3}
      sx={{
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack alignItems={"center"} spacing={2} mb={4}>
        <Typography
          variant="h4"
          color={"rgb(47, 49, 147)"}
          textAlign={"center"}
          sx={{ fontWeight: "bold" }}
        >
          Sevas
        </Typography>
        <img
          src={underline}
          alt="underline"
          style={{ width: 150, margin: "0 auto" }}
        />
      </Stack>
      <Grid container spacing={4} justifyContent="center">
        {blogData.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Stack
              spacing={5}
              alignItems="center"
              sx={{
                p: 3,
                backgroundColor: "#fff",
                borderRadius: 8,
                boxShadow: 2,
                height: 450, // Fixed height for the card
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: 8,
                  objectFit: "cover",
                }} // Fixed height for images
              />
              <Stack spacing={1} sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  textAlign="center"
                  sx={{ fontWeight: "bold" }}
                >
                  {blog.title}
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="center"
                  sx={{ color: "text.secondary" }}
                >
                  {truncateText(blog.description, 25)}
                </Typography>
              </Stack>
              <Button
                variant="contained"
                sx={{ alignSelf: "center", bgcolor: "rgb(245, 130, 32)" }}
              >
                Read More
              </Button>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Sevas;
