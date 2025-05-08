import React from "react";
import { Link as GatsbyLink } from "gatsby";

// material-ui
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// third-party
import { motion } from "framer-motion";

// project-imports
import AnimateButton from "../../@extended/AnimateButton";

// ==============================|| LANDING - HEADER PAGE ||============================== //

export default function HeaderPage() {
  const theme = useTheme();

  return (
    <Container sx={{ pt: "10rem", pb: "2rem", display: "flex", alignItems: "center" }}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ pt: { md: 0, xs: 8 }, pb: { md: 0, xs: 5 } }}
      >
        <Grid item xs={12} md={6} lg={5}>
          <Grid
            container
            spacing={2}
            sx={{
              pr: 10,
              [theme.breakpoints.down("md")]: {
                pr: 0,
                textAlign: "center",
              },
            }}
          >
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 16 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: "spring", stiffness: 40, damping: 20 }}
              >
                <Typography
                  variant="h1"
                  color="success"
                  sx={{
                    fontSize: { xs: "1.825rem", sm: "2rem", md: "2.25rem" },
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                  }}
                >
                  <Box component="span" sx={{ color: "primary.main" }}>
                    ¿Por dónde
                  </Box>{" "}
                  empezar?
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 16 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  damping: 20,
                  delay: 0.2,
                }}
              >
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.875rem", md: "0.95rem" },
                    fontWeight: 400,
                    lineHeight: 1.4,
                  }}
                >
                  Es la pregunta que siempre nos hacen los laboratorios que
                  buscan eficiencia operativa, optimización de costos e
                  internacionalización.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.875rem", md: "0.95rem" },
                    fontWeight: 400,
                    lineHeight: 1.4,
                    pt: "0.825rem",
                  }}
                >
                  Y que reconocen en el modelo “Papel Cero” una herramienta
                  clave para alcanzar esos objetivos.
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} sx={{ my: 3.25 }}>
              <motion.div
                initial={{ opacity: 0, translateY: 16 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  damping: 20,
                  delay: 0.4,
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
                >
                  <Grid item sx={{ pt: 0 }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      Nuestra solución{" "}
                      <Box
                        component="span"
                        sx={{ color: "primary.main", fontWeight: "bold" }}
                      >
                        elimina
                      </Box>{" "}
                      esta pregunta.
                    </Typography>
                  </Grid>
                  <Box
                    sx={{
                      borderLeft: "4px solid #1976d2", // cor da borda
                      pl: 2,
                      ml: 2,
                      my: 4,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: "italic",
                        fontSize: { xs: "1rem", md: "1.2rem" },
                        color: "text.secondary",
                      }}
                    >
                      “No importa dónde comencemos, lo crucial es que los
                      caminos se unan al final.”
                    </Typography>
                  </Box>
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
