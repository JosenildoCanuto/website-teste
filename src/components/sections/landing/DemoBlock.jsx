import React from "react";

import { Link as GatsbyLink } from 'gatsby';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// project import
import MainCard from '../../MainCard';
import Animation from './Animation';

// assets
import SendOutlined from '@ant-design/icons/SendOutlined';
import Figma from '../../../images/landing/Figma.png';
import Typescript from '../../../images/landing/Typescript.png';
import AnimateButton from '../../@extended/AnimateButton';

// ==============================|| LANDING - DEMO PAGE ||============================== //

export default function DemoBlock() {
  return (
    <Container sx={{ pt: '6rem' }}>
      <Grid container alignItems="center" justifyContent="left" spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={1} justifyContent="left" sx={{ textAlign: 'left' }}>
            <Grid item sm={10} md={6}>
              <Grid container spacing={1} justifyContent="left">
                <Grid item xs={12}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    Cursos de Capacitación
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
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
              hidden: { opacity: 0 }
            }}
          >
            <MainCard contentSX={{ p: 3, bgcolor: 'primary.lighter' }} sx={{ border: '1px solid', borderColor: '#e6ebf1' }}>
              <Grid container spacing={1.5}>
                <Grid item xs={12}>
                  <img src={Figma} alt="feature" />
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{ fontSize: '30px', fontWeight: 600, mt: 2 }}>
                    En Linea
                  </Typography>
                </Grid>
                <Grid item xs={12} md={10}>
                  <Typography variant="body1" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'inline-block' }}>
                    <AnimateButton>
                      <Button variant="contained" sx={{ my: 2, textTransform: "none" }} component={GatsbyLink} to="/components-overview/buttons" target="_blank">
                        Vea lista de cursos
                      </Button>
                    </AnimateButton>
                  </Box>
                </Grid>
              </Grid>
            </MainCard>
          </Animation>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Animation
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
          >
            <MainCard contentSX={{ p: 3 }} sx={{ border: '1px solid', borderColor: '#e6ebf1' }}>
              <Grid container spacing={1.5}>
                <Grid item xs={12}>
                  <img src={Typescript} alt="feature" />
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{ fontSize: '30px', fontWeight: 600, mt: 2 }}>
                    Presencial y Mentoría
                  </Typography>
                </Grid>
                <Grid item xs={12} md={10}>
                  <Typography variant="body1" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'inline-block' }}>
                    <AnimateButton>
                      <Button
                        variant="outlined"
                        endIcon={<SendOutlined  />}
                        sx={{ my: 2, textTransform: "none", }}
                        component={Link}
                        href="https://www.figma.com/file/NJGFukWMHgU0LVhS4qLP4A/Mantis?node-id=106412%3A169520"
                        target="_blank"
                      >
                        Conozca los servicios personalizados
                      </Button>
                    </AnimateButton>
                  </Box>
                </Grid>
              </Grid>
            </MainCard>
          </Animation>
        </Grid>
      </Grid>
    </Container>
  );
}
