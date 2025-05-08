import React from "react";

import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Header from "../components/sections/landing/Header";
import Advantages from "../components/sections/landing/Advantages";
import SoftwareBasic from "../components/sections/landing/SoftwareBasic";
import SoftwareAdvanced from "../components/sections/landing/SoftwareAdvanced";
import DemoBlock from "../components/sections/landing/DemoBlock";
import FeatureBlock from "../components/sections/landing/FeatureBlock";
import NumberBlock from "../components/sections/landing/NumberBlock";
import PartnerBlock from "../components/sections/landing/PartnerBlock";
import AboutUs from "../components/sections/landing/AboutUs";

import Layout from "../components/layouts/index";

import headerImg from "../images/landing/header-new.png";
import { Container } from "@mui/system";
import Cards from "../components/sections/landing/Cardas";
import { Typography } from "@mui/material";

export default function Landing() {
  return (
    <Layout>
      <Box
        sx={{
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
          image={headerImg}
          sx={{
            position: "absolute",
            width: { md: "60%", lg: "50%", xl: "50%" },
            right: { md: "8%", lg: "6%", xl: "5%" },
            top: { md: "16%", lg: "12%", xl: "18%" },
            display: { xs: "none", md: "block" },
          }}
        />
        <Header />
      </Box>
      <Box
        sx={{
          width: "100%",
          py: "2rem",
          backgroundColor: "#e5e5e5",
        }}
      >
        <NumberBlock />
      </Box>
      <Advantages />
      <Box
        sx={{
          width: "100%",
          py: { xs: "2rem", md: 0 },
          background: {
            xs: "linear-gradient(to bottom, #45899b 50%, #e67e61 50%)",
            md: "linear-gradient(to right, #45899b 50%, #e67e61 50%)",
          },
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SoftwareBasic />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SoftwareAdvanced />
          </Box>
        </Container>
      </Box>
      <FeatureBlock />
      <Box
        sx={{
          width: "100%",
          py: "2rem",
          background: {
            xs: "linear-gradient(to bottom, #67c8cb 0%, #67c8cb 33.33%, #88cecf 33.33%, #88cecf 66.66%, #c3e5e5 66.66%, #c3e5e5 100%)",
            md: "linear-gradient(to right, #67c8cb 0%, #67c8cb 33.33%, #88cecf 33.33%, #88cecf 66.66%, #c3e5e5 66.66%, #c3e5e5 100%)",
          },
        }}
      >
        <Cards />
      </Box>
      <Container sx={{ pt: "6rem", pb: '4rem' }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Cursos de Capacitación
        </Typography>
      </Container>
      <Box
        sx={{
          width: "100%",
          py: "2rem",
          backgroundColor: "#97d5e9",
        }}
      >
        <DemoBlock />
      </Box>
      <PartnerBlock />
      <AboutUs />
    </Layout>
  );
}

export const Head = () => <title>Home</title>;
