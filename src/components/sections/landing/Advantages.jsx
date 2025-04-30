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
        mt: { xs: 12, md: 8 },
        mb: { xs: 6, md: 8 },
      }}
    >
      <Grid
        container
        spacing={2.5}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", lg: "flex-start" },
          ml: { xs: 2, md: 0 },
        }}
      >
        <Grid item xs={10} sm={10} sx={{ pl: 0 }}>
          <Typography
            variant="h1"
            sx={{
              lineHeight: 1,
              fontSize: { xs: "1.825rem", sm: "2rem", md: "2.25rem" },
              fontWeight: "bold",
              color: "black",
              width: "100%",
              maxWidth: { lg: "600px", xs: "100%" },
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
              color: "text.secondary",
              fontSize: { xs: "0.875rem", md: "1rem" },
              lineHeight: 1.4,
              mb: 2.5,
            }}
          >
            Tras años brindando soluciones a nuestros clientes, creamos una
            herramienta que nos convirtió en la empresa pionera y más eficiente
            en validación de software en Paraguay. Ahora usamos esa misma
            solución para ayudar a nuestros clientes a alcanzar sus objetivos.
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" sx={{ ml: 0, mt: 3 }}>
        <Grid
          item
          xs={10}
          sm={8}
          sx={{ px: 0, display: "flex", justifyContent: { sm: "flex-start" } }}
        >
          <Box
            component="img"
            src="https://www.todoestudo.com.br/wp-content/uploads/2018/10/estatistica.png"
            alt="Statistics"
            sx={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
