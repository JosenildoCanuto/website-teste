import React from "react";

// material-ui
import { Box, Container, Grid, Typography } from "@mui/material";

// ==============================|| LANDING - ADVANTAGES PAGE ||============================== //

export default function AdvantagesPage() {
  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        margin: 0,
        overflow: "hidden",
        mx: "auto",
        pt: { xs: 12, md: 8 },
        pb: { xs: 6, md: 8 },
      }}
    >
      <Grid
        container
        spacing={2.5}
        sx={{
          display: "flex",
          justifyContent: { xs: "center" },
        }}
      >
        <Grid item xs={10} sm={10} sx={{ pl: 0 }}>
          <Typography
            variant="h1"
            sx={{
              textAlign: 'center',
              lineHeight: 1,
              fontSize: { xs: "1.825rem", sm: "2rem", md: "2.25rem" },
              fontWeight: "bold",
              color: "black",
              width: "100%",
            }}
          >
            Un software que reemplaza estructuras rígidas por una guía flexible
            e inteligente (Wise)
          </Typography>
        </Grid>
        <Grid item xs={10} sm={10} sx={{ pl: 0 }}>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              color: "text.secondary",
              fontSize: { xs: "0.875rem", md: "1rem" },
              lineHeight: 1.4,
            }}
          >
            Tras años brindando soluciones a nuestros clientes, creamos una
            herramienta que nos convirtió en la empresa pionera y más eficiente
            en validación de software en Paraguay. Ahora usamos esa misma
            solución para ayudar a nuestros clientes a alcanzar sus objetivos.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
