import React from "react";

import { Button, Container, Grid, Typography } from '@mui/material';
import { useState } from 'react';

export default function CardCarrossel({ title, percentage, description }) {
  const [hover, setHover] = useState(false);

  return (
    <Container
      disableGutters
      sx={{
        margin: 0,
        backgroundColor: 'white',
        border: '1px solid gray',
        borderBottom: '5px solid gray',
        width: { xs: '100%', md: '45%' },
        p: 2
      }}
    >
      <Grid container sx={{ py: '15px', paddingRight: '15px' }}>
        <Grid item sx={{ height: '285px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {/* Título */}
          <Typography variant="body1" sx={{ fontSize: '0.725rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>
            {title} {/* Use a propriedade title */}
          </Typography>

          {/* Conteúdo principal */}
          <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
            <Grid item>
              <Typography variant="h1" sx={{ fontSize: '4rem', fontWeight: '950', color: 'primary.main' }}>
                {percentage} {/* Use a propriedade percentage */}
              </Typography>
            </Grid>
            <Typography variant="h5" sx={{ fontWeight: '950' }}>
              {description} {/* Use a propriedade description */}
            </Typography>
          </Grid>

          {/* Botão */}
          <Grid container>
            <Button
              sx={{
                px: 0,
                display: 'flex',
                justifyContent: 'space-between',
                borderRadius: 0,
                borderBottom: '1px solid blue',
                transition: 'all 0.3s ease-in-out',
                width: hover ? '110px' : '100px',
                '&:hover': {
                  backgroundColor: 'white'
                }
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Read Story
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
