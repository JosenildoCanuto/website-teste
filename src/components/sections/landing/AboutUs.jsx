import React from "react";

import { Link as GatsbyLink } from 'gatsby';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// assets
import AnimateButton from '../../@extended/AnimateButton';

// ==============================|| LANDING - DEMO PAGE ||============================== //

export default function AboutUs() {
  return (
    <Container sx={{ pt: '6rem' }}>
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={1} justifyContent="center" sx={{ mb: 4, textAlign: 'left' }}>
            <Grid item sm={10} md={12}>
              <Grid container spacing={1} justifyContent="left">
                <Grid item xs={12}>
                  <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Sobre Nosotros
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9.5}>
                  <Typography variant="body1" color="text.secondary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9.5}>
                  <Typography variant="body1" color="text.secondary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9.5}>
                  <Box sx={{ display: 'inline-block' }}>
                    <AnimateButton>
                      <Button
                        variant="contained"
                        // color="secondary"
                        sx={{
                          my: 2,
                          bgcolor: '#007cab',
                          textTransform: "none",
                          '&:hover': {
                            bgcolor: '#8c8c8c'
                          }
                        }}
                        component={GatsbyLink}
                        to="/components-overview/buttons"
                        target="_blank"
                      >
                        Contacto
                      </Button>
                    </AnimateButton>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
