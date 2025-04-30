import React from "react";

// material-ui
import { Box, Container, Grid, Typography, Button } from "@mui/material";

export default function SoftwareBasic() {
  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row", md: "column" },
        alignItems: "center",
        justifyContent: { xs: "flex-start", md: "center" },
        backgroundColor: "primary.main",
        width: "100%",
        pt: { xs: 3, md: 6 },
        pb: { xs: 6, md: 0 },
        pl: { md: "3.5rem" },
        overflow: "hidden",
        gap: 3,
      }}
    >
      <Grid
        container
        spacing={2.5}
        sx={{
          justifyContent: "center",
          width: { sm: "50%", md: "100%" },
          gap: 2,
        }}
      >
        <Grid item xs={10} sm={8} sx={{ paddingLeft: 0 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              lineHeight: 1,
              fontWeight: "bold",
              color: "white",
              maxWidth: "400px",
            }}
          >
            <Box component="span" sx={{ color: "#001B2E" }}>
              Quality
            </Box>{" "}
            Management System
          </Typography>
        </Grid>

        <Grid item xs={10} sm={8} sx={{ pl: 0 }}>
          <Box
            sx={{
              minHeight: { xs: "auto", md: "13rem" }, // melhor escalonamento
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
                maxWidth: "450px",
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
                maxWidth: "450px",
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
                lineHeight: 1.4,
                maxWidth: "450px",
                pt: "0.5rem",
              }}
            >
              El sistema calcula el nivel de riesgo y, con un clic, inicia el
              proyecto de validación con tareas y documentos ajustados al riesgo
              y la categoría GAMP.
            </Typography>
          </Box>

          <Button
            color="primary"
            variant="contained"
            size="small"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "1.2rem", md: "1.4rem" },
              lineHeight: "2rem",
              padding: "12px",
              borderRadius: 0,
              paddingTop: 2,
              paddingBottom: 2,
              backgroundColor: "#001B2E",
              textTransform: "none",
            }}
          >
            Explore the QMS
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          justifyContent: "center",
          pl: { xs: "-16px", sm: 0 },
          width: { sm: "50%", md: "100%" },
          pt: { xs: 4, md: 0 },
        }}
      >
        <Grid
          item
          xs={10}
          sm={8}
          sx={{
            paddingX: 0,
            display: "flex",
            justifyContent: { sm: "flex-start", md: "flex-end" },
          }}
        >
          <Box
            component="img"
            src="https://www.mastercontrol.com/images/default-source/mcui-design-system/image-library/custom/homepage/2023/qms-tab-image-1200.jpg"
            alt="Quality Management System"
            width="835px"
            height="514px"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
