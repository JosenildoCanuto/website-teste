import React from "react";

// Material-UI imports
import { Box, Container, Grid, Typography, Button } from "@mui/material";

export default function SoftwareAdvanced() {
  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row", md: "column" },
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#001B2E",
        width: "100%",
        overflow: "hidden",
        pt: { xs: 3, md: 6 },
        pb: { xs: 6, md: 0 },
        gap: 3,
      }}
    >
      <Grid
        container
        spacing={2.5}
        sx={{
          display: "flex",
          justifyContent: "center",
          width: { sm: "50%", md: "100%" },
          gap: 2,
        }}
      >
        <Grid item xs={10} sm={8} sx={{ pl: 0 }}>
          <Typography
            variant="h1"
            color="white"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              lineHeight: { xs: 1, sm: 1, md: 1 },
              fontWeight: "bold",
              maxWidth: "380px",
            }}
          >
            <Box component="span" sx={{ color: "primary.main" }}>
              Quality
            </Box>{" "}
            Management System
          </Typography>
        </Grid>

        <Grid item xs={10} sm={8} sx={{ pl: 0 }}>
          <Box
            sx={{
              minHeight: { xs: "auto", md: "13rem" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="body1"
              color="white"
              sx={{
                fontSize: { xs: "0.875rem", md: "1rem" },
                lineHeight: 1.4,
                maxWidth: "450px",
              }}
            >
              Es un pilar fundamental de nuestra estrategia, donde los
              documentos se transforman en una herramienta clave para la
              digitalización.
            </Typography>

            <Typography
              variant="body1"
              color="white"
              sx={{
                fontSize: { xs: "0.875rem", md: "1rem" },
                lineHeight: 1.4,
                maxWidth: "450px",
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

          <Button
            color="primary"
            variant="contained"
            size="small"
            sx={{
              fontWeight: "600",
              fontSize: { xs: "1.2rem", md: "1.4rem" },
              lineHeight: "2rem",
              padding: "12px",
              borderRadius: 0,
              paddingTop: 2,
              paddingBottom: 2,
              textTransform: "none",
            }}
          >
            Explorar funcionalidades
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          width: { sm: "50%", md: "100%" },
          gap: 2,
        }}
      >
        <Grid
          item
          xs={10}
          sm={8}
          sx={{
            // paddingX: 0,
            pl: "0.725rem",
            display: "flex",
            justifyContent: { sm: "flex-start" },
          }}
        >
          <img
            src="https://www.mastercontrol.com/images/default-source/mcui-design-system/image-library/custom/homepage/2023/qms-tab-image-1200.jpg"
            alt="QMS"
            width="835px"
            height="514px"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
