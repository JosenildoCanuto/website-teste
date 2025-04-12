import React from "react";

// material-ui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// project import
import MainCard from "../components/MainCard";
import Layout from "../components/layouts/index";
import HeroCursos from "../components/sections/cursos/HeroCursos";
import AnimateButton from "../components/@extended/AnimateButton";
import Animation from "../components/sections/landing/Animation";
import { CardMedia } from "@mui/material";

// assets
import imgdemo1 from "../images/cursos/img-demo1.svg";
import imgdemo2 from "../images/cursos/img-demo2.svg";
import imgdemo3 from "../images/cursos/img-demo3.svg";
import headerCursos from "../images/cursos/headerCursos.svg";

const list = [
  {
    active: false,
    title: "Curso 1",
    description:
      "Implementa y optimiza un sistema de gestión de calidad adaptado a tu operación. Domina las mejores prácticas para un cumplimiento normativo eficiente.",
    img: imgdemo1,
  },
  {
    active: true,
    title: "Curso 2",
    description:
      "Implementa y optimiza un sistema de gestión de calidad adaptado a tu operación. Domina las mejores prácticas para un cumplimiento normativo eficiente.",
    img: imgdemo2,
  },
  {
    active: false,
    title: "Curso 3",
    description:
      "Implementa y optimiza un sistema de gestión de calidad adaptado a tu operación. Domina las mejores prácticas para un cumplimiento normativo eficiente.",
    img: imgdemo3,
  },
  {
    active: false,
    title: "Curso 4",
    description:
      "Implementa y optimiza un sistema de gestión de calidad adaptado a tu operación. Domina las mejores prácticas para un cumplimiento normativo eficiente.",
    img: imgdemo1,
  },
  {
    active: true,
    title: "Curso 5",
    description:
      "Implementa y optimiza un sistema de gestión de calidad adaptado a tu operación. Domina las mejores prácticas para un cumplimiento normativo eficiente.",
    img: imgdemo2,
  },
  {
    active: false,
    title: "Curso 6",
    description:
      "Implementa y optimiza un sistema de gestión de calidad adaptado a tu operación. Domina las mejores prácticas para un cumplimiento normativo eficiente.",
    img: imgdemo3,
  },
];

export default function Cursos() {
  return (
    <Layout>
      <Box
        sx={{
          mt: 2,
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          "&>*": {
            position: "relative",
            zIndex: 5,
          },
          "&:before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 2,
            background: "#FFFFFF",
          },
        }}
      >
        <CardMedia
          component="img"
          image={headerCursos}
          sx={{
            position: "absolute",
            width: { md: "50%", lg: "50%", xl: "50%" },
            right: { md: "8%", lg: "6%", xl: "5%" },
            top: { md: "20%", lg: "16%", xl: "12%" },
            display: { xs: "none", md: "block" },
          }}
        />
        <HeroCursos />
      </Box>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={2}
        xs={12}
        sm={10}
        sx={{ mt: 0, mb: { md: 25, xs: 15 }, mx: "auto" }}
      >
        {list.map((list, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            key={index}
            sx={{ my: { md: "2rem" }, px: "1rem" }}
          >
            <Animation
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
            >
              <MainCard
                contentSX={{ p: 3 }}
                sx={{
                  bgcolor: list.active ? "primary.lighter" : "transparent",
                }}
              >
                <Grid container spacing={1.5}>
                  <Grid item xs={12}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                      {list.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">
                      {list.description}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: "inline-block" }}>
                      <AnimateButton>
                        <Button
                          variant={list.active ? "contained" : "outlined"}
                          sx={{ textTransform: "none", my: 2 }}
                          component={Link}
                          href="https://www.figma.com/file/NJGFukWMHgU0LVhS4qLP4A/Mantis?node-id=106412%3A169520"
                        >
                          Ver contenido
                        </Button>
                      </AnimateButton>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ "& img": { mb: -3.75, width: `calc( 100% + 24px)` } }}
                    style={{ paddingTop: 0 }}
                  >
                    <img src={list.img} alt="feature" />
                  </Grid>
                </Grid>
              </MainCard>
            </Animation>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
