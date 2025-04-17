import React from "react";

import { Box, Container, Grid, Typography } from '@mui/material';

export default function AdvantagesPage() {
  return (
    <Container
      disableGutters
      spacing={2}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: 0,
        overflow: 'hidden',
        ml: 'auto',
        mr: 'auto',
        mt: { xs: 12, md: 8 },
        mb: { xs: 6, md: 8 }
      }}
    >
      <Grid
        container
        spacing={2.5}
        sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'flex-start' }, marginLeft: { xs: 2, md: 0 } }}
      >
        <Grid item style={{ paddingLeft: 0 }} xs={10} sm={10}>
          <Typography
            variant="h1"
            color="white"
            sx={{
              lineHeight: { xs: 1, sm: 1, md: 1 },
              fontSize: { xs: "1.825rem", sm: "2rem", md: "2.25rem" },
              fontWeight: 'bold',
              color: 'black',
              width: '100%',
              maxWidth: { lg: '600px', xs: '100%' }
            }}
          >
            <span>Software That </span>
            <Box component="span" sx={{ color: 'primary.main' }}>
              <span>Eliminates Trade-Offs</span>
            </Box>
          </Typography>
        </Grid>
        <Grid item style={{ paddingLeft: 0 }} xs={10} sm={10}>
          <Typography
            variant="h6"
            color="black"
            sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, lineHeight: { xs: 1.4, md: 1.4 }, mb: '20px' }}
          >
            Bringing breakthrough products to market in highly regulated industries can feel like an endless series of trade-offs.
            MasterControl is software simplifies GxP workflows so you never have to sacrifice quality for cost or innovation for regulation.
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', ml: 0, mt: '20px' }}>
        <Grid item style={{ px: 0, display: 'flex', justifyContent: { sm: 'flex-start' } }} xs={10} sm={8}>
          <img
            src="https://www.todoestudo.com.br/wp-content/uploads/2018/10/estatistica.png"
            alt=""
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
