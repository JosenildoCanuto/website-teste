import React from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// third party
import { motion } from "framer-motion";

// project-import

export default function HeroProducts() {
  const theme = useTheme();

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: "15rem",
        pb: { xs: "2rem", md: "6rem", lg:"12rem" , xl: "24rem" },
      }}
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
              pr: 0,
              [theme.breakpoints.down("md")]: { textAlign: "center" },
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
                  <span>Wise QMS</span>
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={8} lg={12}>
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
                  Moderno sistema de gestión de calidad enfocado en operaciones
                  de pequeño y mediano porte que buscan crecer de manera ágil y
                  organizada. Diseñado para adaptarse a las necesidades de
                  mercados emergentes en América Latina.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
