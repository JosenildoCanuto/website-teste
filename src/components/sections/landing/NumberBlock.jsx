import React from "react";

// material-ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third party
import { motion } from 'framer-motion';

// ==============================|| LANDING - NUMBER BLOCK PAGE ||============================== //

export default function NumberBlock() {
  return (
    <Container>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
              delay: 0.2
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Typography variant="h4" sx={{ minWidth: 80, textAlign: 'right' }}>
                  1 dia
                </Typography>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Flujo de Aprobación
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">Aprobación de documentos GMP de 30 días para 1 dia.</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
              delay: 0.4
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Typography variant="h4" sx={{ minWidth: 80, textAlign: 'right' }}>
                  1 dia
                </Typography>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Fabricación
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">Documentación de fabricación que lleva entre 2 y 3 semanas. Bajamos para 1 dia.</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
              delay: 0.6
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Typography variant="h4" sx={{ minWidth: 80, textAlign: 'right' }}>
                  70%
                </Typography>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Ahorro
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">Personal enfocado en cualidad y producción.</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}
