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

import headerImg from "../images/landing/header.png";

export default function Landing() {
  return (
    <Layout>
      <Box
        sx={{
          // position: 'relative',
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
        {/* <CardMedia
            component="img"
            image={headerImg}
            sx={{
              position: 'absolute',
              width: { md: '60%', lg: '50%', xl: '50%' },
              right: { md: '8%', lg: '6%', xl: '5%' },
              top: { md: '16%', lg: '12%', xl: '8%' },
              display: { xs: 'none', md: 'block' }
            }}
          /> */}
        <Header />
      </Box>
      <NumberBlock />
      <Advantages />
      <Box sx={{ display: { md: "flex" }, width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            width: { md: "50%" },
            backgroundColor: "primary.main",
          }}
        >
          <SoftwareBasic />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: { md: "50%" },
            backgroundColor: "#001B2E",
          }}
        >
          <SoftwareAdvanced />
        </Box>
      </Box>
      <FeatureBlock />
      <DemoBlock />
      <PartnerBlock />
      <AboutUs />
    </Layout>
  );
}

export const Head = () => <title>Home</title>
