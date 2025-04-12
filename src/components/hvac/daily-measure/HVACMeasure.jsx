import React, { useState } from "react";
import { Box, Typography, Paper, useTheme } from "@mui/material";
import Differential from "./Differential";
import RoomPressure from "./RoomPressure";
import ChartDailyMeasure from "./ChartDailyMeasure";
import HVACFonts from "themes/custom/hvac-themes/HVACFonts";

// ==============================|| Displays the current room pressure and a chart for the last 24hs ||============================== //
const HVACMeasure = ({ 
    roomName = 'error', 
    roomNumber, 
    adjacentRoomInfo, 
    differential, 
    risk,
    flow,
    last24hsPressureData,
    pressure,
    lastMeasureComp = false
}) => {

    const hvacFonts = HVACFonts(lastMeasureComp);



  const theme = useTheme(); 

  return (
    <Box
      sx={{
        border: `3px solid ${theme.palette.divider}`,
        borderRadius: 0,
        p: 2,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: theme.spacing(4),
        maxWidth: { xs: '100%', sm: 500 },
        width: '100%'
      }}
    >
        <Box sx={{ width: '100%' }}>
            {/* Room Info */}
            <Box sx={{ minWidth: 0, display: 'flex', justifyContent: hvacFonts.justify }}>
                <Typography variant="p" sx={{ fontSize: hvacFonts.typoTitle, textAlign: hvacFonts.justify }}>
                    {roomName}
                </Typography>
            </Box>

            {/* Pressure Components */}
            <Box 
              sx={{ 
                display: 'flex', 
                gap: 3, 
                alignItems: 'end',
                flexGrow: 1,
                justifyContent: 'space-around'
              }}
            >
                {/* Current Room Pressure */}
                <RoomPressure 
                  roomNumber={roomNumber}
                  roomPressure={pressure}
                  risk={risk}
                  lastMeasureComp={lastMeasureComp}
                />

                {/* Differential and Air Flow */}
                <Differential 
                  differential={differential}
                  flow={flow}
                  risk={risk}
                  lastMeasureComp={lastMeasureComp}
                />

                {/* Adjacent Room Pressure: doesn't render if lastMeasure is true */}
                {!lastMeasureComp && (
                  <RoomPressure 
                    roomNumber={adjacentRoomInfo.number}
                    roomPressure={adjacentRoomInfo.pressure}
                    risk={adjacentRoomInfo.risk}
                  />
                )}
            </Box>

            {/* Chart: doesn't render if lastMeasure is true */}
            {!lastMeasureComp && (
              <Box>
                <ChartDailyMeasure last24hsPressureData={last24hsPressureData} risk={risk}/>
              </Box>
            )}
        </Box>
    </Box>
  );
};

export default HVACMeasure;
