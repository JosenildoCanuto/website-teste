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
    title: "Sistemas Informatizados",
    desc: "Desarrollamos sistemas de misión crítica; nuestra experiencia va más allá de la validación. Nos permite detectar inconformidades y, además, guiar en la búsqueda de soluciones.",
    delay: 0.2,
  },
  {
    img: imgfeature2,
    title: "Limpieza",
    desc: "Como miembros de la ISPE y estudiosos de las normativas, basamos nuestras soluciones en su aplicación práctica, lo que garantiza la adherencia a las normas GMP.",
    delay: 0.4,
  },
  {
    img: imgfeature3,
    title: "Procesos",
    desc: "Nacimos en la rutina diaria de los procesos de la industria farmacéutica. Nuestros proyectos de validación no solo generan documentación, sino que también hacen más eficientes los procesos relacionados.",
    delay: 0.6,
  },
];

export default function Cards() {
  return (
    <Container sx={{ }}>
      <Grid container spacing={4}>

        <Grid item xs={12}>
          <Box
            display="flex"
            flexWrap={{ xs: "wrap", md: "nowrap" }}
            gap={3}
            pt={3}
          >
            {featuresData.map((feature, index) => (
              <Box
                key={index}
                flex={1}
                minWidth={{ xs: "100%", sm: "48%", md: "32%" }}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 40,
                    damping: 20,
                    delay: feature.delay,
                  }}
                  style={{ height: "100%" }}
                >
                  <MainCard
                    contentSX={{ py: 3 }}
                    sx={{
                      border: "1px solid",
                      borderColor: "#e6ebf1",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                        flex: 1,
                      }}
                    >
                      <Grid item xs={12}>
                        <img src={feature.img} alt={feature.title} />
                      </Grid>
                      <Typography variant="h6" sx={{ fontWeight: "500" }}>
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "text.secondary" }}
                      >
                        {feature.desc}
                      </Typography>
                    </Box>
                  </MainCard>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
