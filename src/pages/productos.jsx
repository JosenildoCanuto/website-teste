import React from "react";

// material-ui
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

// project import
import HeroProducts from "../components/sections/products/HeroProducts";
import ListProducts from "../components/sections/products/ListProducts";

import Layout from "../components/layouts/index";

// assets
import headerProducts from "../images/products/headerPricing.svg";

export default function Products() {
  return (
    <Layout>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          "&>*": {
            position: "relative",
            zIndex: 5,
          },
          "&:before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
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
            width: { md: "60%", lg: "50%", xl: "50%" },
            right: { md: "8%", lg: "6%", xl: "5%" },
            top: { md: "16%", lg: "12%", xl: "8%" },
            display: { xs: "none", md: "block" },
          }}
        />
        <HeroProducts />
      </Box>
      <Grid item xs={12} sx={{ mt: "2rem" }}>
        <Grid
          container
          spacing={1}
          justifyContent="center"
          sx={{ mb: 4, textAlign: "center" }}
        >
          <Grid item sm={10} md={6}>
            <Grid container spacing={1} justifyContent="center">
              <Grid item xs={10}>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
                  Módulos flexibles para hoy, escalables para el futuro.
                </Typography>
              </Grid>
              <Grid item xs={10} md={9}>
                <Typography variant="body1" color="text.secondary">
                  Nuestra experiencia con clientes de distintos niveles
                  operativos y de desarrollo nos permitió crear un sistema
                  adaptable a cada etapa de crecimiento, generando beneficios
                  inmediatos. Con cada módulo implementado, las funciones
                  existentes se potencian, impulsando un rendimiento operativo
                  medible y exponencial.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ListProducts />
    </Layout>
  );
}
