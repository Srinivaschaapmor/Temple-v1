import React, { useEffect } from "react";
import { Box } from "@mui/material";

const FaceBookPage = () => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        border: "1px solid #ccc",
        borderRadius: 5,
        overflow: "hidden",
      }}
    >
      <div
        className="fb-page"
        data-href="https://www.facebook.com/facebook"
        data-tabs="timeline"
        data-width="300"
        data-height="300"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      ></div>
    </Box>
  );
};

export default FaceBookPage;
