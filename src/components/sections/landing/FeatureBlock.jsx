import React from "react";

// material-ui
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// project import
import MainCard from "../../MainCard";
import { motion } from "framer-motion";

// assets
import imgfeature1 from "../../../images/landing/img-feature1.svg";
import imgfeature2 from "../../../images/landing/img-feature2.svg";
import imgfeature3 from "../../../images/landing/img-feature3.svg";

// ==============================|| LANDING - FEATURE PAGE ||============================== //

export default function FeatureBlock() {
  return (
    <Container sx={{ pt: "6rem" }}>
      <Grid container alignItems="center" justifyContent="left" spacing={3}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={1}
            justifyContent="left"
            sx={{ textAlign: "left" }}
          >
            <Grid item sm={10} md={6}>
              <Grid container spacing={1} justifyContent="left">
                <Grid item xs={12}>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Servicios de Validación
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Container
          sx={{
            pt: "1rem",
            pl: "1rem",
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" },
            gap: "1rem",
          }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, translateY: 550 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: "spring", stiffness: 40, damping: 20, delay: 0.2 }}
            >
              <MainCard
                contentSX={{ p: 3 }}
                sx={{ border: "1px solid", borderColor: "#e6ebf1" }}
              >
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <img src={imgfeature1} alt="feature" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      Sistemas Informatizados
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor.
                    </Typography>
                  </Grid>
                </Grid>
              </MainCard>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, translateY: 550 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: "spring", stiffness: 40, damping: 20, delay: 0.4 }}
            >
              <MainCard
                contentSX={{ p: 3 }}
                sx={{ border: "1px solid", borderColor: "#e6ebf1" }}
              >
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <img src={imgfeature2} alt="feature" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      Limpieza
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor.
                    </Typography>
                  </Grid>
                </Grid>
              </MainCard>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, translateY: 550 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: "spring", stiffness: 40, damping: 20, delay: 0.6 }}
            >
              <MainCard
                contentSX={{ p: 3 }}
                sx={{ border: "1px solid", borderColor: "#e6ebf1" }}
              >
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <img src={imgfeature3} alt="feature" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      Procesos
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor.
                    </Typography>
                  </Grid>
                </Grid>
              </MainCard>
            </motion.div>
          </Grid>
        </Container>
      </Grid>
    </Container>
  );
}
