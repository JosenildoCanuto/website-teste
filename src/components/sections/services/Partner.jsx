import React from "react";

// material-ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// project import
import Animation from '../landing/Animation';

// assets
import Codeigniter from '../../../images/Services/tech/codeigniter.svg';
import Angular from '../../../images/Services/tech/angular.svg';
import Shopify from '../../../images/Services/tech/shopify.svg';
import Net from '../../../images/Services/tech/net-logo.svg';
import Vue from '../../../images/Services/tech/vuetify-logo.svg';

export default function Partner() {
  const partnerimage = [
    {
      image: Angular,
      text: 'Sistemas'
    },
    {
      image: Codeigniter,
      text: 'Software'
    },
    {
      image: Vue,
      text: 'Limpieza'
    },
    {
      image: Shopify,
      text: 'Transporte'
    },
    {
      image: Net,
      text: 'Procesos'
    }
  ];

  return (
    <Box sx={{ overflowX: 'hidden', pt: {xl:'12rem'} }}>
      <Container>
        <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ pt: { md: 20, xs: 2.5 }, pb: { md: 2.5, xs: 2.5 } }}>
          <Grid item xs={12}>
            <Grid container spacing={5} justifyContent="center" sx={{ pb: 4, textAlign: 'center' }}>
              {partnerimage.map((item, index) => (
                <Grid item key={index}>
                  <Animation
                    variants={{
                      visible: { opacity: 1 },
                      hidden: { opacity: 0 }
                    }}
                  >
                    <Box
                      sx={{
                        width: 180,
                        p: 2,
                        border: '2px solid',
                        borderColor: '#e6ebf1',
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': {
                          boxShadow: 3,
                          borderColor: 'secondary.lighter'
                        }
                      }}
                    >
                      <Box
                        component="img"
                        src={item.image}
                        alt="feature"
                        sx={{
                          width: 40,
                          height: 40,
                          objectFit: 'contain',
                          transition: 'transform 0.3s ease, opacity 0.3s ease',
                          mb: 1.5,
                          '&:hover': {
                            transform: 'scale(1.1)',
                            opacity: 0.8
                          }
                        }}
                      />
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 500,
                          color: 'text.primary',
                          textAlign: 'center'
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  </Animation>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
