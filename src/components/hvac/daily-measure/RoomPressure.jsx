import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, useTheme } from '@mui/material';
import HVACColors from 'themes/custom/hvac-themes/HVACColors';
import HVACFonts from 'themes/custom/hvac-themes/HVACFonts';

const RoomPressure = ({ roomNumber, roomPressure, risk, lastMeasureComp }) => {


    const theme = useTheme(); 

    const colors = HVACColors(risk); 

    const hvacFonts = HVACFonts(lastMeasureComp); 



  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0, 
      }}
    >
      {/* Room Number */}
      <Typography variant="p" component="div" sx={{ fontSize: hvacFonts.typoTitle }}>
       {roomNumber}
      </Typography>

      {/* Pressure Box */}
      <Paper
        elevation={0}
        sx={{
          width: 100, 
          height: 50, 
          padding: theme.spacing(1),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.colorBg, 
          color: colors.colorSecondary, 
          borderRadius: 3,
          borderColor: colors.colorSecondary,
          /* border: `3px solid ${colors.colorSecondary}`,  */
          '@media (max-width: 400px)': {
            width: '100%', 
            height: '100%', 
          },
        
        }}
      >
        <Typography variant="p" component="div" sx={{ fontSize: hvacFonts.boxFont, color: colors.fontColor}}>
          {roomPressure} Pa
        </Typography>
      </Paper>
    </Box>
  );
};

export default RoomPressure;