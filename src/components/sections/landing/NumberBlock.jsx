import React from "react";

// material-ui
import { Container, Grid, Typography } from "@mui/material";

// third party
import { motion } from "framer-motion";

// ==============================|| LANDING - NUMBER BLOCK PAGE ||============================== //

// Dados separados em array
const numberItems = [
  {
    value: "1 dia",
    title: "",
    description: "Tiempos 30 Veces MENOR. En aprobación de Documentos.",
    delay: 0.2,
  },
  {
    value: "1 dia",
    title: "Gestión de Riesgo: ",
    description:
      "ESTRUCTURADA Y GUIADA.",
    delay: 0.4,
  },
  {
    value: "70%",
    title: "",
    description: "83 % más eficiencia en sectores de Calidad y Producción.",
    delay: 0.6,
  },
];

// Componente
export default function NumberBlock() {
  return (
    <Container>
      <Grid container alignItems="center" justifyContent='center' spacing={2}>
        {numberItems.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, translateY: 16 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 20,
                delay: item.delay,
              }}
            >
              <Grid container spacing={2} alignItems="center" textAlign='center'>
                <Grid item xs zeroMinWidth>
                  <Grid container spacing={1}>
                    {item.title && (
                      <Grid item xs={12}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {item.title}
                        </Typography>
                      </Grid>
                    )}
                    <Grid item xs={12}>
                      <Typography variant="body1" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
