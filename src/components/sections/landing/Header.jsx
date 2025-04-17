import React from "react";

import { Link as GatsbyLink } from "gatsby";

// material-ui
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// third party
import { motion } from "framer-motion";

// project-import
import AnimateButton from "../../@extended/AnimateButton";

// ==============================|| LANDING - HEADER PAGE ||============================== //

export default function HeaderPage() {
  const theme = useTheme();

  return (
    <Container
      sx={{ py: '10rem', display: "flex", alignItems: "center" }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ pt: { md: 0, xs: 8 }, pb: { md: 0, xs: 5 } }}
      >
        <Grid item xs={12} lg={5} md={6}>
          <Grid
            container
            spacing={2}
            sx={{
              pr: 10,
              [theme.breakpoints.down("md")]: { pr: 0, textAlign: "center" },
            }}
          >
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: "spring", stiffness: 40, damping: 20 }}
              >
                <Typography
                  variant="h1"
                  color="success"
                  sx={{
                    fontSize: { xs: "1.825rem", sm: "2rem", md: "2.25rem" },
                    fontWeight: 700,
                    lineHeight: { xs: 1.3, sm: 1.3, md: 1.3 },
                  }}
                >
                  <Box component="span" sx={{ color: "primary.main" }}>
                    <span>Líder </span>
                  </Box>
                  <span> en validación de sistemas en </span>
                  <Box component="span" sx={{ color: "primary.main" }}>
                    <span>Paraguay</span>
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
                  stiffness: 40,
                  damping: 20,
                  delay: 0.2
                }}
              >
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.875rem", md: "0.95rem" },
                    fontWeight: 400,
                    lineHeight: { xs: 1.4, md: 1.4 },
                  }}
                >
                  Desarrollamos tanto el sistema como una metodología única de
                  trabajo, totalmente adaptada a América Latina.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} sx={{ my: 3.25 }}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
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
                  <Grid item style={{ paddingTop: 0 }}>
                    <AnimateButton>
                      <Button
                        component={GatsbyLink}
                        to="/login"
                        color="primary"
                        size="large"
                        variant="contained"
                        sx={{ textTransform: "none" }}
                      >
                        Conozca Nuestra Metodología
                      </Button>
                    </AnimateButton>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
