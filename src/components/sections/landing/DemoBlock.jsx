import React from "react";

import { Link as GatsbyLink } from "gatsby";

// material-ui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// project import
import MainCard from "../../MainCard";
import Animation from "./Animation";

// assets
import SendOutlined from "@ant-design/icons/SendOutlined";
import Figma from "../../../images/landing/Figma.png";
import Typescript from "../../../images/landing/Typescript.png";
import AnimateButton from "../../@extended/AnimateButton";

// ==============================|| LANDING - DEMO PAGE ||============================== //

export default function DemoBlock() {
  return (
    <Container sx={{ pt: "2rem" }}>
      <Grid
        container
        spacing={2}
        sx={{ alignItems: "flex-start", justifyContent: "flex-start" }}
      >
        <Grid item xs={12}>
          <Grid
            container
            spacing={1}
            sx={{ justifyContent: "flex-end", pb: "3rem" }}
          >
            <Grid item sm={10} md={6}>
              <Grid
                container
                spacing={1}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Grid item xs={12} md={9}>
                  <Typography
                    variant="h4"
                    sx={{ color: "#007cab", fontWeight: "550" }}
                  >
                    Todos nuestros procesos de validación incluyen secciones de
                    entrenamiento.
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: "#007cab", fontWeight: "550", pt: "0.5rem" }}
                  >
                    Sin embargo, la rápida evolución de la industria exige una
                    capacitación continua del equipo.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Animation
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <MainCard
              contentSX={{ p: 3, bgcolor: "primary.lighter" }}
              sx={{ border: "1px solid", borderColor: "#e6ebf1" }}
            >
              <Grid container spacing={1.5}>
                <Grid item xs={12}>
                  <img src={Figma} alt="feature" />
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{ fontSize: "30px", fontWeight: 600, mt: 2 }}>
                    En Linea
                  </Typography>
                </Grid>
                <Grid item xs={12} md={10}>
                  <Typography variant="body1" color="text.secondary">
                    Una formación completa y flexible, diseñada para que tu
                    equipo pueda organizar sus estudios sin comprometer su
                    rutina diaria.
                  </Typography>
                </Grid>
                {/* <Grid item xs={12}>
                  <Box sx={{ display: "inline-block" }}>
                    <AnimateButton>
                      <Button
                        disabled
                        variant="contained"
                        sx={{ my: 2, textTransform: "none" }}
                        component={GatsbyLink}
                        to="/components-overview/buttons"
                        target="_blank"
                      >
                        Próxima clase en octubre
                      </Button>
                    </AnimateButton>
                  </Box>
                </Grid> */}
              </Grid>
            </MainCard>
          </Animation>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Animation
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <MainCard
              contentSX={{ p: 3 }}
              sx={{ border: "1px solid", borderColor: "#e6ebf1" }}
            >
              <Grid container spacing={1.5}>
                <Grid item xs={12}>
                  <img src={Typescript} alt="feature" />
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{ fontSize: "30px", fontWeight: 600, mt: 2 }}>
                    Presencial y Mentoría
                  </Typography>
                </Grid>
                <Grid item xs={12} md={10}>
                  <Typography variant="body1" color="text.secondary">
                    El formato Presencial y Mentoría ofrece una experiencia de
                    aprendizaje aplicada directamente en el entorno real de
                    trabajo, lo que permite una rápida transferencia del
                    conocimiento.
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Facilita la resolución inmediata de dudas técnicas y
                    normativas, mientras que la mentoría personalizada se enfoca
                    en los desafíos específicos del equipo.
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Este enfoque refuerza la cultura de calidad y el
                    cumplimiento de las normas GMP, al tiempo que promueve un
                    mayor compromiso y participación del personal en los
                    procesos clave.
                  </Typography>
                </Grid>
                {/* <Grid item xs={12}>
                  <Box sx={{ display: "inline-block" }}>
                    <AnimateButton>
                      <Button
                        variant="outlined"
                        endIcon={<SendOutlined />}
                        sx={{ my: 2, textTransform: "none" }}
                        component={Link}
                        href="https://www.figma.com/file/NJGFukWMHgU0LVhS4qLP4A/Mantis?node-id=106412%3A169520"
                        target="_blank"
                      >
                        Conozca los servicios personalizados
                      </Button>
                    </AnimateButton>
                  </Box>
                </Grid> */}
              </Grid>
            </MainCard>
          </Animation>
        </Grid>
      </Grid>
    </Container>
  );
}
