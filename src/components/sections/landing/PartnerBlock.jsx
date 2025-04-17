import React from "react";

import PropTypes from 'prop-types';
// material-ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// project import
import Animation from './Animation';

// assets
import paypal from '../../../images/landing/companies/payPal.svg';
import ablePro from '../../../images/landing/companies/ablePro.svg';
import vimeo from '../../../images/landing/companies/vimeo.svg';
import codedThemes from '../../../images/landing/companies/codedThemes.svg';
import dinersClub from '../../../images/landing/companies/dinersClub.svg';
import applePay from '../../../images/landing/companies/applePay.svg';
import americanExpress from '../../../images/landing/companies/americanExpress.svg';
import discover from '../../../images/landing/companies/discover.svg';

// ================================|| SLIDER - ITEMS ||================================ //

function Item({ item }) {
  return (
    <Typography
      variant="h2"
      sx={{
        cursor: 'pointer',
        fontWeight: 600,
        my: 1,
        mx: 4.5,
        transition: 'all 0.3s ease-in-out',
        opacity: item.highlight ? 0.75 : 0.4,
        '&:hover': { opacity: '1' }
      }}
    >
      {item.text}
    </Typography>
  );
}

// ==============================|| LANDING - PARTNER PAGE ||============================== //

export default function PartnerBlock() {
  // const theme = useTheme();

  const partnerimage = [
    {
      image: paypal
    },
    {
      image: ablePro
    },
    {
      image: vimeo
    },
    {
      image: codedThemes
    },
    {
      image: dinersClub
    },
    {
      image: applePay
    },
    {
      image: americanExpress
    },
    {
      image: discover
    }
  ];

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Container sx={{ pt: '6rem' }}>
        <Grid container alignItems="left" justifyContent="left" spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={1} justifyContent="left" sx={{ mb: 4, textAlign: 'left' }}>
              <Grid item sm={10} md={6}>
                <Grid container spacing={1} justifyContent="left">
                  <Grid item xs={12}>
                    <Typography variant="h4" colort="sucess" sx={{ fontWeight: "bold" }}>
                      Nuestros Clientes
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ paddingLeft: '1rem' }}>
            <Grid container spacing={2} justifyContent="start" sx={{ textAlign: 'left', flexWrap: { xs: 'wrap', lg: 'nowrap' } }}>
              {partnerimage.map((item, index) => (
                <Grid item key={index}>
                  <Animation
                    variants={{
                      visible: { opacity: 1 },
                      hidden: { opacity: 0 }
                    }}
                  >
                    <Link href={item.link} target="_blank">
                      <Box
                        component="img"
                        src={item.image}
                        alt="feature"
                        sx={{
                          transition: 'transform 0.3s ease, opacity 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1)',
                            opacity: 0.8
                          }
                        }}
                      />
                    </Link>
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

Item.propTypes = { item: PropTypes.object };
