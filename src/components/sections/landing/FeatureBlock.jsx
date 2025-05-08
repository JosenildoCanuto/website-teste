import React from "react";

// material-ui
import { Container, Box, Grid, Typography } from "@mui/material";

// project import
import MainCard from "../../MainCard";
import { motion } from "framer-motion";

// assets
import imgfeature1 from "../../../images/landing/img-feature1.svg";
import imgfeature2 from "../../../images/landing/img-feature2.svg";
import imgfeature3 from "../../../images/landing/img-feature3.svg";

const featuresData = [
  {
    img: imgfeature1,
    bgColor: "#67c8cb",
    title: "Sistemas Informatizados",
    desc: "Desarrollamos sistemas de misión crítica; nuestra experiencia va más allá de la validación. Nos permite detectar inconformidades y, además, guiar en la búsqueda de soluciones.",
    delay: 0.2,
  },
  {
    img: imgfeature2,
    bgColor: "#88cecf",
    title: "Limpieza",
    desc: "Como miembros de la ISPE y estudiosos de las normativas, basamos nuestras soluciones en su aplicación práctica, lo que garantiza la adherencia a las normas GMP.",
    delay: 0.4,
  },
  {
    img: imgfeature3,
    bgColor: "#c3e5e5",
    title: "Procesos",
    desc: "Nacimos en la rutina diaria de los procesos de la industria farmacéutica. Nuestros proyectos de validación no solo generan documentación, sino que también hacen más eficientes los procesos relacionados.",
    delay: 0.6,
  },
];

export default function FeatureBlock() {
  return (
    <Container sx={{ pt: '6rem', pb: '3rem' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Typography variant="h4" fontWeight="bold">
              Servicios de Validación
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Confía tu proyecto de validación a un equipo multidisciplinario
              con más de 20 años de experiencia en la industria farmacéutica y
              en tecnología de la información.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Conocemos tu rutina y vivimos tus desafíos, lo que nos permite
              ofrecer soluciones adaptadas al mercado Paraguayo y a América
              Latina.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
