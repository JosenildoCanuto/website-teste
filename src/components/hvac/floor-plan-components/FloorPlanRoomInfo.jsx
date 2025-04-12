import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, useTheme } from '@mui/material';
import HVACColors from 'themes/custom/hvac-themes/HVACColors';
import HVACFonts from 'themes/custom/hvac-themes/HVACFonts';
import { floor } from 'lodash';
import HVACArrow from 'themes/custom/hvac-themes/HVACArrow';

const FloorPlanRoomInfo = ({ risk, flow, differential}) => {


    const theme = useTheme(); 

    const colors = HVACColors(risk); 

    const hvacFonts = HVACFonts(false, true); 



  return (

    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center' }}>

      {/* Airflow Direction */}
      <HVACArrow risk={risk} flow={flow} lastMeasureComp = {false} floorPlanView = {true} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0, 
        }}
      >

        {/* Pressure Box */}
        <Paper
          elevation={0}
          sx={{
            width: '100%',   
            height: 25, 
            display: "flex",
            padding: theme.spacing(1),
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.colorBgFloorPlanView, 
            color: colors.colorSecondary, 
            borderRadius: 0,
            /*border: `3px solid ${colors.colorSecondary}`, */
            '@media (max-width: 400px)': {
              width: '100%', // Adjust width for small screens
              height: '100%', // Adjust height for small screens
            },
          
          
          }}
        >
          <Typography variant="body1" component="div" sx={{ fontSize: hvacFonts.boxFont, color: colors.fontColorFloorPlanView, fontWeight: 'bold'}}>
            {differential} Pa
          </Typography>
        </Paper>
      </Box>
    </Box>


    


  );
};

export default FloorPlanRoomInfo;