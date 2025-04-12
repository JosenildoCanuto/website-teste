import React from "react";

// material-ui
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

// project import
import ListServices from "../components/sections/services/ListServices";
import HeroServices from "../components/sections/services/HeroServices";
import PartnerBlock from "../components/sections/services/PartnerBlock";
import Partner from "../components/sections/services/Partner";

import Layout from "../components/layouts/index";

// assets
import headerProducts from "../images/products/headerPricing.svg";
import Desktop from "../images/Services/desktop.svg";
import bgServices from "../images/Services/bg-services.svg";

export default function Services() {
  return (
    <Layout>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          "&>*": {
            position: "relative",
            zIndex: 5,
          },
          "&:before": {
            content: '""',
            position: "absolute",
            width: "100%",
            top: 0,
            left: 0,
            zIndex: 2,
            background: "#FFFFFF",
          },
        }}
      >
        <CardMedia
          component="img"
          image={headerProducts}
          sx={{
            position: "absolute",
            width: { md: "30%", lg: "30%", xl: "30%" },
            right: { md: "18%", lg: "16%", xl: "20%" },
            top: { md: "26%", lg: "16%", xl: "12%" },
            display: { xs: "none", md: "block" },
          }}
        />
        <HeroServices />
      </Box>
      <Grid
        container
        sx={{
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            bottom: { xs: 70, md: -100, xl: -250 },
            left: 0,
            width: "100%",
            height: { xs: "60%", md: "58%", xl: "80%" },
            backgroundImage: `url(${bgServices})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          },
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <Grid
            container
            spacing={1}
            justifyContent="center"
            sx={{ pb: 4, textAlign: "center" }}
          >
            <Grid item sm={10} md={6}>
              <Grid container spacing={1} justifyContent="center">
                <Grid item xs={10}>
                  <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
                    Get the power to create beautiful
                    <Box component="span" sx={{ color: "primary.main" }}>
                      <span> web apps </span>
                    </Box>
                    with minimum effort
                  </Typography>
                </Grid>
                <Grid item xs={10} md={9}>
                  <Typography variant="body1" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            py: 1,
            position: "relative",
            zIndex: 2,
          }}
        >
          <CardMedia
            component="img"
            image={Desktop}
            sx={{
              maxWidth: 1200,
              width: "100%",
              height: "auto",
              borderRadius: 2,
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            mx: "auto",
            py: 4,
            position: "relative",
            zIndex: 2,
            mt: "auto",
          }}
        >
          <ListServices />
        </Grid>
      </Grid>
      <Partner />
      <PartnerBlock />
    </Layout>
  );
}
