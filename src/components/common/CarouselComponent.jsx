import React from "react";
import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.png";
import img3 from "../../assets/img-3.jpg";
const carouselItems = [
  {
    img: img1,
    title: "Slide 1",
  },
  {
    img: img2,
    title: "Slide 2",
  },
  {
    img: img3,
    title: "Slide 3",
  },
];

const CarouselComponent = () => {
  return (
    <Box id="test">
      {/* <Carousel width={100} height="80vh"> */}
      <Carousel height="80vh">
        {carouselItems.map((item, index) => (
          <Box
            key={index}
            component="img"
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: 2,
              // border: "2px solid",
              borderColor: "grey.400",
            }}
            src={item.img}
            alt={item.title}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;
