import React, { useState } from "react";
import { Box, Grid, Tabs, Tab, Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
  height: "100%",
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightMedium,
  "&.Mui-selected": {
    color: theme.palette.primary.main,
  },
}));

const TabContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  height: "100%",
  backgroundColor: theme.palette.background.paper,
}));

const Admin = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box height={"100vh"}>
      <Grid container>
        <Grid item xs={2}>
          <Box
            borderRight={"1px solid"}
            height={"100vh"}
            bgcolor={"background.default"}
          >
            <StyledTabs
              orientation="vertical"
              value={tabValue}
              onChange={handleTabChange}
              aria-label="Admin Tabs"
            >
              <StyledTab label="Carousel" />
              <StyledTab label="Future Events" />
              <StyledTab label="Pilgrimage Services" />
              <StyledTab label="Gallery" />
              <StyledTab label="Latest Updates" />
            </StyledTabs>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <TabContent>
            {tabValue === 0 && (
              <Typography variant="h6">Carousel Content</Typography>
            )}
            {tabValue === 1 && (
              <Typography variant="h6">Future Events Content</Typography>
            )}
            {tabValue === 2 && (
              <Typography variant="h6">Pilgrimage Services Content</Typography>
            )}
            {tabValue === 3 && (
              <Typography variant="h6">Gallery Content</Typography>
            )}
            {tabValue === 4 && (
              <Typography variant="h6">Latest Updates Content</Typography>
            )}
          </TabContent>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Admin;
