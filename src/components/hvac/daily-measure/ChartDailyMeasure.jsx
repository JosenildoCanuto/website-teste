import { useState } from 'react';

// Material-UI
import { alpha, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { BarChart } from '@mui/x-charts';

import HVACColors from 'themes/custom/hvac-themes/HVACColors';

// ==============================|| CHART DAILY MEASURE ||============================== //

// Cria arrays de dados fictícios
const roomPs = Array.from({ length: 24 }, () => parseFloat((Math.random() * 100).toFixed(2)));
const adjRoomPs = Array.from({ length: 24 }, () => parseFloat((Math.random() * 100).toFixed(2)));
const diff = roomPs.map((value, index) => parseFloat((value - adjRoomPs[index]).toFixed(2)));

const defaultData = {
  roomPs,
  adjRoomPs,
  diff,
};

const labelNames = {
  roomPs: 'Room Pressure',
  adjRoomPs: 'Adjacent Room Pressure',
  diff: 'Diff',
}

export default function ChartDailyMeasure({ last24hsPressureData = defaultData, risk = '' }) {
  const theme = useTheme();
  let colors = HVACColors(risk);

  // Função para definir a cor com base nos thresholds
  const defineColor = (diff) => {
    const absoluteDiff = Math.abs(diff); // Usamos o valor absoluto
    if (absoluteDiff > 5) {
      return HVACColors('high').colorBg;
    } else if (absoluteDiff > 3) {
      return HVACColors('medium').colorBg;
    } else if (absoluteDiff > 1) {
      return HVACColors('low').colorBg;
    } else {
      return HVACColors('').colorBg;
    }
  };

  // Divide os dados de diff em séries separadas com base nos thresholds
  const diffSeries = [
    {
      id: 'DiffHigh',
      label: 'High',
      data: last24hsPressureData.diff.map((value) => (Math.abs(value) > 5 ? Math.abs(value) : null)),
      color: HVACColors('high').colorBg,
    },
    {
      id: 'DiffMedium',
      label: 'Med.',
      data: last24hsPressureData.diff.map((value) =>
        Math.abs(value) > 3 && Math.abs(value) <= 5 ? Math.abs(value) : null
      ),
      color: HVACColors('medium').colorBg,
    },
    {
      id: 'DiffLow',
      label: 'Low',
      data: last24hsPressureData.diff.map((value) =>
        Math.abs(value) > 1 && Math.abs(value) <= 3 ? Math.abs(value) : null
      ),
      color: HVACColors('low').colorBg,
    },
    {
      id: 'DiffDefault',
      label: 'Ok',
      data: last24hsPressureData.diff.map((value) => (Math.abs(value) <= 1 ? Math.abs(value) : null)),
      color: HVACColors('').colorBg,
    },
  ];

  const initialSeries = [
    {
      id: 'Pressure',
      label: labelNames.roomPs,
      data: last24hsPressureData.roomPs,
      color: "#4D4D42", // Cor fixa para a série Pressure
    },
    ...diffSeries, // Adiciona as séries de diff
    {
      id: 'AdjPressure',
      label: labelNames.adjRoomPs,
      data: last24hsPressureData.adjRoomPs,
      color: "#d6ccc2", // Cor fixa para a série Adj. Pressure
    },
  ];

  // Estado para gerenciar a visibilidade de cada série
  const [seriesVisibility, setSeriesVisibility] = useState({
    [labelNames.roomPs]: true,
    'High': true,
    'Med.': true,
    'Low': true,
    'Ok': true,
    [labelNames.adjRoomPs]: true,
  });

  // Função para alternar a visibilidade de uma série
  const toggleSeriesVisibility = (seriesLabel) => {
    setSeriesVisibility((prevVisibility) => ({
      ...prevVisibility,
      [seriesLabel]: !prevVisibility[seriesLabel],
    }));
  };

  const [highlightedItem, setHighLightedItem] = useState(null);

  const handleHighLightedSeries = (newHighLightedSeries) => {
    if (newHighLightedSeries !== null) {
      setHighLightedItem((prev) => ({
        ...prev,
        seriesId: newHighLightedSeries,
      }));
    }
  };

  return (
    <>
      <BarChart
        height={230}
        series={initialSeries
          .map((series) => ({
            ...series,
            stack: '1',
            visible: seriesVisibility[series.label], // Verifica a visibilidade no estado
            highlightScope: { highlighted: 'series', faded: 'global' },
          }))
          .filter((series) => series.visible)}
        highlightedItem={highlightedItem}
        leftAxis={null}
        bottomAxis={null}
        slotProps={{ legend: { hidden: true } }}
        axisHighlight={{ x: 'none' }}
        tooltip={{ trigger: 'item' }}
        margin={{ left: 20, right: 20, top: 30, bottom: 15 }}
        sx={{ '& .MuiBarElement-root:hover': { opacity: 0.6 } }}
      />
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{ width: 1, maxWidth: '90%', ml: 2, mb: 2 }}
        alignItems="center"
      >
        {initialSeries.map((series) => (
          <Stack
            key={series.label}
            alignItems="center"
            direction="row"
            spacing={1}
            onClick={() => toggleSeriesVisibility(series.label)}
            onMouseEnter={() => handleHighLightedSeries(series.id)}
            onMouseLeave={() => setHighLightedItem(null)}
            sx={{ opacity: seriesVisibility[series.label] ? 1 : 0.45, cursor: 'pointer' }}
          >
          { (series.label === labelNames.roomPs || series.label === labelNames.adjRoomPs) && (
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Box
                sx={{
                  height: 10,
                  width: 10,
                  borderRadius: '50%',
                  backgroundColor: series.color,
                  mr: 1, // Optional: margin right for spacing
                }}
              />
              <Typography>{series.label}</Typography>
            </Box>
          )}
          </Stack>
        ))}
      </Stack>
    </>
  );
}