import React from "react";

import PropTypes from "prop-types";
// material-ui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// project import
import Animation from "./Animation";

// assets
import farpasa from "../../../images/landing/companies/farpasa-logo.png";
import eticos from "../../../images/landing/companies/logo-eticos.jpeg";
import indexSaci from "../../../images/landing/companies/logo-index-saci.png";
import lasca from "../../../images/landing/companies/logo-lasca.jpeg";
import matherCompany from "../../../images/landing/companies/logo-mather-company.jpg";
import promepar from "../../../images/landing/companies/logo-promepar.jpeg";
import tecnomy from "../../../images/landing/companies/tecnomyl-logo.png";

// ================================|| SLIDER - ITEMS ||================================ //

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
  // const theme = useTheme();

  const partnerimage = [
    {
      image: farpasa,
    },
    {
      image: eticos,
    },
    {
      image: indexSaci,
    },
    {
      image: lasca,
    },
    {
      image: matherCompany,
    },
    {
      image: promepar,
    },
    {
      image: tecnomy,
    },
  ];

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Container sx={{ pt: "6rem" }}>
        <Grid container alignItems="left" justifyContent="left" spacing={2}>
          <Grid item xs={12}>
            <Grid
              container
              spacing={1}
              justifyContent="left"
              sx={{ pb: 2, textAlign: "left" }}
            >
              <Grid item sm={10} md={6}>
                <Grid container spacing={1} justifyContent="left">
                  <Grid item xs={12}>
                    <Typography
                      variant="h4"
                      colort="sucess"
                      sx={{ fontWeight: "bold" }}
                    >
                      Nuestros Clientes
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ pl: "1rem", pt: "0" }}>
            <Grid
              container
              spacing={1}
              justifyContent="start"
              sx={{ textAlign: "left", flexWrap: { xs: "wrap", lg: "nowrap" }, gap: 3 }}
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
                        width: "8rem",
                        height: "8rem",
                        objectFit: "contain",
                        border: "0",
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
