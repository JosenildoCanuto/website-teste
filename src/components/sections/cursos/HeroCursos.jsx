import React from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// third party
import { motion } from "framer-motion";
import { Box } from "@mui/material";

// project-import

export default function HeroCursos() {
  const theme = useTheme();

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: "15rem",
        pb: { xs: "2rem", md: "6rem", lg: "8rem" },
        "@media (min-width: 1800px)": {
          pb: "20rem",
        },
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ pt: { xs: 0 }, pb: { md: 0, xs: 6 } }}
      >
        <Grid item xs={12} lg={5} md={6}>
          <Grid
            container
            spacing={2}
            sx={{
              pl: '1.5rem',
              pr: 0,
              [theme.breakpoints.down("md")]: { textAlign: "start" },
            }}
          >
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: "spring", stiffness: 150, damping: 30 }}
              >
                <Typography
                  variant="h1"
                  color="success"
                  sx={{
                    fontSize: { xs: "1.825rem", sm: "2rem", md: "2.5rem" },
                    fontWeight: 700,
                    lineHeight: { xs: 1.3, sm: 1.3, md: 1.3 },
                  }}
                >
                  <span>Cursos & </span>
                  <Box component="span" sx={{ color: "primary.main" }}>
                    <span>Mentoria</span>
                  </Box>
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 30,
                  delay: 0.2,
                }}
              >
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.875rem", md: "1rem" },
                    fontWeight: 400,
                    lineHeight: { xs: 1.4, md: 1.4 },
                  }}
                >
                  Elija el que mas se encaja con tu necesidad. Nuestros cursos
                  no son basados en la realidad operacional y aplicación
                  práctica de las normas.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
