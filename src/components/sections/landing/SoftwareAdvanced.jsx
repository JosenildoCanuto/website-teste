import React from "react";

// material-ui
import { Box, Container, Grid, Typography, Button } from "@mui/material";

// assets
import gestionDocumentos from "../../../images/landing/gestionDocumentos.png";
import Documentos from "../../../images/landing/documentos.png";

export default function SoftwareBasic() {
  return (
    <Container
      disableGutters
      sx={{
        pt: { xs: "6rem", md: "3rem" },
        pl: { md: "6rem" },
        display: "flex",
        flexDirection: { xs: "column", sm: "row", md: "column" },
        justifyContent: "flex-start",
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
            src={Documentos}
            alt="logo documentos"
            sx={{ width: "2.5rem" }}
          />
          <Typography
            variant="h4"
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Gestión de Documentos
          </Typography>
        </Grid>

        <Grid item xs={10} md={11} sx={{ p: 0 }}>
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
              Es un pilar fundamental de nuestra estrategia, donde los
              documentos se transforman en una herramienta clave para la
              digitalización.
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
              Nuestra solución separa la información del documento formal,
              permitiendo crear una base de conocimiento que automatiza la
              generación documental, simplifica la aprobación y firma digital, y
              optimiza la gestión de documentos. Esto allana el camino hacia el
              ‘Papel Cero’.
            </Typography>
          </Box>

          {/* <Button
            color="primary"
            variant="contained"
            size="large"
            sx={{
              px: 1,
              backgroundColor: "#1E3F20",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#061901",
              },
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
          pt: "2.9rem",
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
            src={gestionDocumentos}
            alt="Quality Management System"
            width="835px"
            height="514px"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
