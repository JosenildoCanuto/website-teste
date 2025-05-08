import React from "react";

import PropTypes from "prop-types";
// material-ui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import Animation from "../landing/Animation";

// assets
import farpasa from "../../../images/landing/companies/farpasa-logo.png";
import eticos from "../../../images/landing/companies/logo-eticos.png";
import lasca from "../../../images/landing/companies/logo-lasca.png";
import indexSaci from "../../../images/landing/companies/logo-index-saci.png";
import matherCompany from "../../../images/landing/companies/logo-mather-company.png";
import promepar from "../../../images/landing/companies/logo-promepar.png";
import tecnomy from "../../../images/landing/companies/tecnomyl-logo.png";

function Item({ item }) {
  return (
    <Typography
      variant="h2"
      sx={{
        cursor: "pointer",
        fontWeight: 600,
        my: 1,
        mx: 4.5,
        transition: "all 0.3s ease-in-out",
        opacity: item.highlight ? 0.75 : 0.4,
        "&:hover": { opacity: "1" },
      }}
    >
      {item.text}
    </Typography>
  );
}

// ==============================|| LANDING - PARTNER PAGE ||============================== //

export default function PartnerBlock() {
  
  const partnerimage = [
    { image: farpasa },
    { image: eticos },
    { image: lasca },
    { image: indexSaci },
    { image: matherCompany },
    { image: promepar },
    { image: tecnomy },
  ];

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Container>
        <Grid
          container
          alignItems="start"
          justifyContent="start"
          spacing={2}
          sx={{ pt: { md: 10, xs: 2.5 }, pb: { md: 5, xs: 2.5 } }}
        >
          <Grid item xs={12}>
            <Grid
              container
              spacing={1}
              justifyContent="start"
              sx={{ pb: 4, textAlign: "start" }}
            >
              <Grid item sm={10} md={12}>
                <Grid container spacing={1} justifyContent="start">
                  <Grid item xs={12}>
                    <Typography variant="h4" color="sucess">
                      What our Customer says
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ paddingLeft: 0 }}>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              sx={{
                pb: 4,
                textAlign: "center",
                flexWrap: { xs: "wrap", lg: "nowrap" },
              }}
            >
              {partnerimage.map((item, index) => (
                <Grid item key={index}>
                  <Animation
                    variants={{
                      visible: { opacity: 1 },
                      hidden: { opacity: 0 },
                    }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      alt="feature"
                      sx={{
                        width: "2rem",
                        height: "2rem",
                        objectFit: "contain",
                        transition: "transform 0.3s ease, opacity 0.3s ease",
                      }}
                    />
                  </Animation>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

Item.propTypes = { item: PropTypes.object };
