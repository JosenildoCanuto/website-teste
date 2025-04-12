import React, { useState } from "react";
import { Box, Typography, Paper, useTheme } from "@mui/material";
import HVACColors from "themes/custom/hvac-themes/HVACColors";
import HVACArrow from "themes/custom/hvac-themes/HVACArrow";
import HVACFonts from "themes/custom/hvac-themes/HVACFonts";

const Differential = ({ flow, differential, risk, lastMeasureComp }) => {
  const theme = useTheme(); 
  const colors = HVACColors(risk);
  const hvacFonts = HVACFonts(lastMeasureComp);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0, 
      }}
    >
      {/* Airflow Direction */}
      <HVACArrow risk={risk} flow={flow} lastMeasureComp={lastMeasureComp} />

      {/* Pressure Box */}
      <Paper
        elevation={0}
        sx={{
          width: 100, 
          height: 50, 
          display: "flex",
          padding: theme.spacing(1),
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.colorBg, 
          color: colors.colorSecondary, 
          borderRadius: 0,
          /*border: `3px solid ${colors.colorSecondary}`, */
          '@media (max-width: 400px)': {
            width: '100%', // Adjust width for small screens
            height: '100%', // Adjust height for small screens
          },
        
        
        }}
      >
        <Typography variant="body1" component="div" sx={{ fontSize: hvacFonts.boxFont, color: colors.fontColor}}>
          {differential} Pa
        </Typography>
      </Paper>
    </Box>
  );
};

export default Differential;
