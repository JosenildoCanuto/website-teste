import React from "react";

// material-ui
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// project import
import MainCard from "../../MainCard";
import Animation from "./Animation";

// assets
import imgfeature1 from "../../../images/landing/img-feature1.svg";
import imgfeature2 from "../../../images/landing/img-feature2.svg";
import imgfeature3 from "../../../images/landing/img-feature3.svg";

// ==============================|| LANDING - FEATURE PAGE ||============================== //

export default function FeatureBlock() {
  return (
    <Container sx={{ pt: "6rem" }}>
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={1}
            justifyContent="center"
            sx={{ textAlign: "center" }}
          >
            <Grid item sm={10} md={6}>
              <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12}>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Servicios de Validación
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
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
        <Container sx={{ pt: '3rem', display: 'flex', flexWrap: {xs: 'wrap', md: 'nowrap'}, gap: '2rem' }}>
          <Grid item xs={12} sm={6} md={4}>
            <Animation
              variants={{
                hidden: { opacity: 0, translateY: 550 },
                visible: { opacity: 1, translateY: 0 },
              }}
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
            </Animation>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Animation
              variants={{
                hidden: { opacity: 0, translateY: 550 },
                visible: { opacity: 1, translateY: 0 },
              }}
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
            </Animation>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Animation
              variants={{
                hidden: { opacity: 0, translateY: 550 },
                visible: { opacity: 1, translateY: 0 },
              }}
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
            </Animation>
          </Grid>
        </Container>
      </Grid>
    </Container>
  );
}
