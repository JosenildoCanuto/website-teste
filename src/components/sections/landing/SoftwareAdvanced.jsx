import React from "react";

import { Box, Container, Grid, Typography, Button } from "@mui/material";

export default function SoftwareAdvanced() {
  return (
    <Container
      disableGutters
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row", md: "column" },
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#001B2E",
        width: "100%",
        margin: 0,
        overflow: "hidden",
        mt: { xs: 3, md: 6 },
        mb: { xs: 6, md: 0 },
      }}
    >
      <Grid
        container
        spacing={2.5}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginLeft: 0,
          width: { sm: "50%", md: "100%" },
        }}
      >
        <Grid item style={{ paddingLeft: 0 }} xs={10} sm={8}>
          <Typography
            variant="h1"
            color="white"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              lineHeight: { xs: 1, sm: 1, md: 1 },
              fontWeight: 'bold',
              width: "100%",
              maxWidth: "380px",
            }}
          >
            <Box component="span" sx={{ color: "primary.main" }}>
              <span>Quality</span>
            </Box>{" "}
            Management System
          </Typography>
        </Grid>
        <Grid item style={{ paddingLeft: 0 }} xs={10} sm={8}>
          <Typography
            variant="h6"
            color="white"
            sx={{
              fontSize: { xs: "0.875rem", md: "1rem" },
              fontWeight: 400,
              lineHeight: { xs: 1.4, md: 1.4 },
              maxWidth: "650px",
            }}
          >
            Complete and connected meets fast and flexible. From quality event
            management to document control and integrated training -
            MasterControl Quality Excellence transforms your quality data and
            processes into a competitive advantage.
          </Typography>
          <Box
            component="ul"
            sx={{
              paddingLeft: 3,
              listStyleType: "disc",
              fontWeight: "bold",
              color: "white",
            }}
          >
            <Typography component="li">Quality Events</Typography>
            <Typography component="li">Document Control</Typography>
            <Typography component="li">Training and Exams</Typography>
            <Typography component="li">Audit Management</Typography>
            <Typography component="li">Risk Management</Typography>
          </Box>
          <Button
            color="primary"
            variant="contained"
            size="small"
            sx={{
              fontWeight: "600",
              fontSize: { xs: "1.2rem", md: "1.4rem" },
              lineHeight: "2rem",
              p: "12px",
              borderRadius: 0,
              my: 3,
              textTransform: "none",
            }}
          >
            Explore the QMS
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          marginLeft: { xs: "-16px", sm: 0 },
          width: { sm: "50%", md: "100%" },
        }}
      >
        <Grid
          item
          style={{
            px: 0,
            display: "flex",
            justifyContent: { sm: "flex-start" },
          }}
          xs={10}
          sm={8}
        >
          <img
            src="https://www.mastercontrol.com/images/default-source/mcui-design-system/image-library/custom/homepage/2023/qms-tab-image-1200.jpg"
            alt=""
            width="835px"
            height="514px"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
