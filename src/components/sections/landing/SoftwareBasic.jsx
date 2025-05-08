import React from "react";

// material-ui
import { Box, Container, Grid, Typography, Button } from "@mui/material";

import gestionRiesgo from "../../../images/landing/gestionRiesgo.png";
import Riesgo from "../../../images/landing/riesgo.png";

export default function SoftwareBasic() {
  return (
    <Container
      disableGutters
      sx={{
        pt: { md: "3rem" },
        display: "flex",
        flexDirection: { xs: "column", sm: "row", md: "column" },
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        spacing={2.5}
        sx={{
          alignContent: "center",
          width: { sm: "50%", md: "100%" },
        }}
      >
        <Grid
          item
          xs={10}
          md={12}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            gap: "1rem",
          }}
        >
          <Box
            component="img"
            src={Riesgo}
            alt="logo riesgo"
            sx={{ width: "3rem" }}
          />
          <Typography
            variant="h4"
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Gestión de Riesgo
          </Typography>
        </Grid>

        <Grid item xs={10} md={9}>
          <Box
            sx={{
              pb: { xs: "1rem", md: 0 },
              minHeight: { xs: "auto", md: "13rem" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontSize: { xs: "0.875rem", md: "1rem" },
                lineHeight: 1.4,
              }}
            >
              Imagina seleccionar el objeto de tu análisis y que el sistema te
              recomiende la herramienta ideal entre 17 opciones.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontSize: { xs: "0.875rem", md: "1rem" },
                lineHeight: 1.4,
                pt: "0.5rem",
              }}
            >
              Al elegirla, se cargan automáticamente todos los pasos para que te
              concentres en definir el riesgo de cada parámetro.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontSize: { xs: "0.875rem", md: "1rem" },
                pt: "0.5rem",
              }}
            >
              El sistema calcula el nivel de riesgo y, con un clic, inicia el
              proyecto de validación con tareas y documentos ajustados al riesgo
              y la categoría GAMP.
            </Typography>
          </Box>

          {/* <Button
            color="primary"
            variant="contained"
            size="large"
            sx={{
              px: 1,
              backgroundColor: "#7C110D",
              textTransform: "none",
            }}
          >
            Explorar funcionalidades
          </Button> */}
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          width: { sm: "50%", md: "100%" },
          pt: "2rem",
        }}
      >
        <Grid
          item
          xs={10}
          sm={8}
          sx={{
            display: "flex",
            justifyContent: { sm: "flex-start" },
          }}
        >
          <Box
            component="img"
            src={gestionRiesgo}
            alt="Quality Management System"
            width="835px"
            height="514px"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
