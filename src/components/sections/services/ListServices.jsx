import React from "react";

// import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Check from '../../../images/Services/check.svg';
import { Button, Stack } from '@mui/material';

// plan list
const points = [
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

export default function ListServices() {
  return (
    <Box
      sx={{
        marginLeft: { md: '9rem', xs: '1rem' },
        marginRight: { md: '9rem', xs: '1rem' },
        mb: '6rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {points.map((plan, index) => (
          <Grid item xs={12} sm={4} key={index} sx={{ width: '100%' }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box sx={{ pt: 0.5 }}>
                <img src={Check} alt="Check icon" style={{ height: '24px' }} />
              </Box>
              <Typography variant="body1" color="white">
                {plan.description}
              </Typography>
            </Stack>
          </Grid>
        ))}
        <Button variant="contained" sx={{textTransform: "none"}}>Contacto</Button>
      </Grid>
    </Box>
  );
}
