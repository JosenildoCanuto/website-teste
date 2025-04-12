import React, {useState} from "react";
import { Button, Box } from "@mui/material";
import HVACMeasure from "../daily-measure/HVACMeasure";

function HVACBoxView({ data, lastMeasureComp}) {




  return (

    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
    {data.map((item, index) => (
        <Box
          key={item.roomNumber}
          sx={{
            flexBasis: {
              xs: "100%",    // 1 per row on extra small screens
              sm: "calc(50% - 16px)", // 2 per row on small screens
              md: "calc(33.33% - 16px)" // 3 per row on desktop (medium and up)
            },
          }}
        >
          <HVACMeasure
            {...item}
            lastMeasureComp={lastMeasureComp} // ou (index === data.length - 1)
          />
        </Box>
      ))}
    </Box>
  );
}

export default HVACBoxView;