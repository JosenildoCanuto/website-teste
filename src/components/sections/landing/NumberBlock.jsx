import React from "react";

// material-ui
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

// third party
import { motion } from "framer-motion";

// ==============================|| LANDING - NUMBER BLOCK PAGE ||============================== //

export default function NumberBlock() {
  return (
    <Container>
      <Grid container alignItems="center" spacing={2} sx={{ display: "flex" }}>
        <Grid item xs={12} sm={6} md={4}>
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
            <Grid
              container
              spacing={2}
              sx={{
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="body1">
                      Tiempos{" "}
                      <Box
                        component="span"
                        sx={{ color: "primary.main", fontWeight: "bold" }}
                      >
                        30 Veces
                      </Box>{" "}
                      MENOR.
                    </Typography>
                    <Typography>En aprobación de Documentos.</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 30,
              delay: 0.4,
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{ alignItems: "center", textAlign: "center" }}
            >
              <Grid item xs zeroMinWidth>
                <Grid
                  container
                  spacing={1}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Grid item xs={8}>
                    <Typography variant="body1">
                      Gestión de Riesgo: ESTRUCTURADA Y GUIADA.
                    </Typography>
                    <Typography variant="body1">
                      <Box
                        component="span"
                        sx={{ color: "primary.main", fontWeight: "bold" }}
                      >
                        7 Herramientas
                      </Box>{" "}
                      <Box
                        component="span"
                        sx={{ color: "warning.main", fontWeight: "bold" }}
                      >
                        Exclusivas
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 30,
              delay: 0.6,
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Grid item xs zeroMinWidth>
                <Grid
                  container
                  spacing={1}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Grid item xs={8}>
                    <Typography variant="body1">
                      <Box
                        component="span"
                        sx={{ color: "primary.main", fontWeight: "bold" }}
                      >
                        83%
                      </Box>{" "}
                      más{" "}
                      <Box
                        component="span"
                        sx={{ color: "warning.main", fontWeight: "bold" }}
                      >
                        eficiencia
                      </Box>{" "}
                      en sectores de Calidad y Producción.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}
