import { useState, useMemo } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import { BarChart } from '@mui/x-charts';
import { Stack, Typography, Box } from '@mui/material';
import HVACColors from 'themes/custom/hvac-themes/HVACColors';

// ==============================|| HELPER FUNCTIONS ||============================== //

const createThresholdSeries = (data, thresholds, colors) => {
  return thresholds.map((threshold, index) => {
    const lowerBound = index === 0 ? -Infinity : thresholds[index - 1];
    const upperBound = threshold;
    
    return {
      data: data.map(value => {
        const absValue = Math.abs(value);
        return absValue > lowerBound && absValue <= upperBound ? absValue : null;
      }),
      color: colors[index],
      stack: 'diff',
      highlightScope: { highlighted: 'series', faded: 'global' }
    };
  });
};

// ==============================|| COMPONENT ||============================== //

const roomPs = Array.from({ length: 24 }, () => parseFloat((Math.random() * 100).toFixed(2)));
const adjRoomPs = Array.from({ length: 24 }, () => parseFloat((Math.random() * 100).toFixed(2)));
const diff = roomPs.map((value, index) => parseFloat((value - adjRoomPs[index]).toFixed(2)));

const defaultData = {
  roomPs,
  adjRoomPs,
  diff
};

export default function ChartDailyMeasure({ last24hsPressureData = defaultData, risk = '' }) {
  const theme = useTheme();
  const colors = HVACColors(risk);

  // Threshold configuration
  const diffThresholds = [2, 5, 10];
  const diffColors = [
    theme.palette.info.main,
    theme.palette.success.main,
    theme.palette.warning.main,
    theme.palette.error.main
  ];

  // Cria as séries de diff conforme thresholds e adiciona uma última série para excedentes
  const diffSeries = useMemo(() => {
    const series = createThresholdSeries(last24hsPressureData.diff, diffThresholds, diffColors);
    
    series.push({
      data: last24hsPressureData.diff.map(value =>
        Math.abs(value) > diffThresholds[diffThresholds.length - 1] ? Math.abs(value) : null
      ),
      color: diffColors[diffThresholds.length],
      stack: 'diff',
      highlightScope: { highlighted: 'series', faded: 'global' }
    });
    
    return series;
  }, [last24hsPressureData.diff, diffThresholds, diffColors]);

  const initialSeries = [
    { 
      id: 'Pressure', 
      label: 'Pressure', 
      data: last24hsPressureData.roomPs,
      color: alpha(theme.palette.grey[900], 0.85),
    },
    ...diffSeries.map((series, index) => ({
      id: `diff-${index}`,
      label: index === 0 ? 'Difference' : '', // Apenas o primeiro item terá label
      group: 'Difference', // Agrupa todas as séries diff sob chave "Difference"
      ...series,
      // Apenas a primeira série tem o highlight ativo; as demais ficarão com highlightScope definido como null
      highlightScope: index === 0 ? { highlighted: 'series', faded: 'global' } : null,
      valueFormatter: (value, context) =>
        last24hsPressureData.diff[context.dataIndex].toFixed(2),
    })),
    {
      id: 'AdjPressure',
      label: 'Adj. Pressure',
      data: last24hsPressureData.adjRoomPs,
      color: alpha(theme.palette.primary[200], 0.85),
    }
  ];

  // Gerencia a visibilidade das séries. As chaves serão "Pressure", "Difference" e "Adj. Pressure"
  const [seriesVisibility, setSeriesVisibility] = useState({
    'Pressure': true,
    'Difference': true,
    'Adj. Pressure': true,
  });

  const toggleSeriesVisibility = (key) => {
    setSeriesVisibility(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const [highlightedItem, setHighLightedItem] = useState(null);

  return (
    <>
      <BarChart
        height={230}
        series={initialSeries
          .map(series => ({
            ...series,
            type: 'bar',
            stack: '1',
            color: series.color,
            // Se a série tiver group, utiliza ela para controlar a visibilidade
            visible: series.group ? seriesVisibility[series.group] : seriesVisibility[series.label],
            highlightScope: { highlighted: 'series', faded: 'global' },
          }))
          .filter(series => series.visible)}
        highlightedItem={highlightedItem}
        leftAxis={null}
        bottomAxis={null}
        slotProps={{
          legend: { hidden: true },
          bar: {
            rx: 0, // Barras quadradas
            height: 24, // Altura original das barras
          },
        }}
        margin={{ left: 20, right: 20, top: 30, bottom: 15 }}
        sx={{
          '& .MuiBarElement-root': { 
            transition: 'none', // Remove animação
            '&:hover': { opacity: 0.6 } // Efeito hover original
          }
        }}
      />

      <Stack 
        direction="row" 
        justifyContent="space-around"
        sx={{ width: 1, maxWidth: 250, ml: 2, mb: 2, gap: 3 }}
      >
        {initialSeries
          .filter(series => series.label) // Apenas exibe na legenda os itens que possuem label
          .map(series => (
            <Stack
              key={series.group || series.label}
              alignItems="center"
              direction="row"
              spacing={0.5}
              onClick={() => toggleSeriesVisibility(series.group || series.label)}
              onMouseEnter={() => setHighLightedItem({ seriesId: series.id })}
              onMouseLeave={() => setHighLightedItem(null)}
              sx={{ 
                opacity: seriesVisibility[series.group || series.label] ? 1 : 0.45,
                cursor: 'pointer',
                '&:hover': { opacity: 0.8 }
              }}
            >
              <Box 
                sx={{ 
                  width: 10,
                  height: 10,
                  bgcolor: series.color,
                  borderRadius: '50%'
                }} 
              />
              <Typography variant="body2">
                {series.label}
              </Typography>
            </Stack>
          ))
        }
      </Stack>
    </>
  );
}