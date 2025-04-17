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

export default function HeroServices() {
  const theme = useTheme();

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: {xs: "8rem" , md:"15rem"},
        pb: { xs: "12rem" },
        "@media (min-width: 1800px)": {
          pb: "26rem",
        },
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ pt: { md: 0, xs: 8 }, pb: 5 }}
      >
        <Grid item xs={10} lg={5} md={6}>
          <Grid
            container
            spacing={2}
            sx={{
              pl: '1.5rem',
              pr: 0,
              [theme.breakpoints.down("md")]: { textAlign: "start" },
            }}
          >
            <Grid item xs={12} sx={{ pl: 0 }}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: "spring", stiffness: 40, damping: 20 }}
              >
                <Typography
                  variant="h4"
                  color="success"
                  sx={{
                    fontWeight: 'bold',
                    lineHeight: { xs: 1.3, sm: 1.3, md: 1.3 },
                  }}
                >
                  <span>
                    Metodología de
                    <Box component="span" sx={{ color: "primary.main" }}>
                      <span> Validación </span>
                    </Box>
                    en
                    <Box component="span" sx={{ color: "primary.main" }}>
                      <span> 7 </span>
                    </Box>
                    pasos.
                  </span>
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={8} lg={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
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
                    lineHeight: { xs: 1.4, md: 1.4 },
                  }}
                >
                  Sabemos qué hacer, como hacer y en que orden hacer. También
                  conocemos soluciones, y tenemos los medios de ayudarte en la
                  implementación de ellas.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
