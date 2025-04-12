import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { useTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip'; 
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import MainCard from 'components/MainCard'; 
import getMatrizChipColors from 'utils/matriz-utils/matrizChipColors';
import { display, fontSize, width } from '@mui/system';
import { Stack } from '@mui/material';

import defaultImage from './default.svg';
import CircularWithLabel from 'components/@extended/progress/CircularWithLabel';

import { FileTextFilled, FileTextOutlined ,ReconciliationFilled, CloseCircleOutlined, CloseCircleFilled, HourglassFilled, } from '@ant-design/icons';

import TodoListTable from './Todo';




function MainStatus({
    sector,
    tipo,
    objeto,
    related,
    status,
    gamp,
    proyecto,
    riesgo,
    fecha = '24/01/2025',
    progress = 100,
}) {

    let validacionCardsFontColor = {color: '#8C8C8C'}
    let activeValidación = {border:1, borderColor: "primary.main", padding: 1, borderRadius: 2, backgroundColor: '#E6F7FF'}
    let validacionCardsStyles = { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1, paddingX: 1, paddingY:2, minWidth: 100, marginBottom: 2}
    const theme = useTheme();
    let chipColors = getMatrizChipColors(status)

  return (
<Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, flex: 10 }}>
  {/* Primeiro Card e Middle Section (60%) */}
  <Box sx={{ flex: 6, display: 'flex', gap: 2 }}>
    {/* First Card */}
    
    <Card sx={{ padding: 3, flex: 6 }}>
        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <Chip
            label={status}
            color={chipColors.basedOn}
            sx={{
            backgroundColor: chipColors.backgroundColor,
            fontWeight: 'bold',
            textTransform: 'capitalize',
            color: chipColors.customFontColor,
            }}
        />
        </Box>
        <Box sx={{display: 'flex',flexDirection:'column' , justifyContent: 'center', alignItems: 'center', gap: 1}}>
            <img src={defaultImage} alt="My Icon" style={{ width: '25%' }} />
            <Typography>{sector}</Typography>
            <Typography>Tipo:  {objeto}</Typography>

            <Divider sx={{ width: '100%', marginY:2 }} />

            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'space-around', alignItems: 'center', gap: 2, width: '100%'}}>

                <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, alignContent: 'center', alignItems: 'center'}}>
                    <Typography color='secondary'>GAMP</Typography>
                    <Typography sx={{fontWeight: 700}}>{gamp}</Typography>
                </Box>                
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, alignContent: 'center', alignItems: 'center'}}>
                    <Typography color='secondary'>RIESGO</Typography>
                    <Typography sx={{fontWeight: 700}}>{riesgo}</Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, alignContent: 'center', alignItems: 'center'}}>
                    <Typography color='secondary'>FECHA</Typography>
                    <Typography sx={{fontWeight: 700}}>{fecha}</Typography>
                </Box>

            </Box>

            <Divider sx={{ width: '100%', marginY:2 }} />
            
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent:'flex-end' }}>
                <Button variant="contained" size='small'>Editar</Button>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center', width: '100%' }}>
                <Box
                sx={{
                    '& .MuiTypography-root': {
                    fontSize: '1.1rem',
                    color: 'text.primary',
                    },
                }}
                >
                <CircularWithLabel value={progress} size={90} thickness={2} />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography>Proyecto:</Typography>
                <Typography color={'secondary'}>Nombre del proyecto de validación</Typography>
                </Box>
            </Box>



        </Box>




    </Card>

    {/* Middle Section */}
    <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'space-between', justifyContent: 'space-around' , flex: 4, gap: 2, }}>

      {/* Validation Card */}
      <Card sx={{ padding: 2 }}>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" >
            <Typography variant="h5">Validación</Typography>
        </Stack>
        <Divider sx={{ marginY: 1 }} />

            <Card sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1, padding: 1, boxShadow:0, border: 1, borderColor: '#D9D9D9' }}>
                <Box sx={activeValidación}>OQ</Box>
                <Box sx={activeValidación}>PQ</Box>
                <Box sx={activeValidación}>IQ</Box>
                <Box sx={activeValidación}>URS</Box>
                <Box sx={activeValidación}>PNL</Box>
                <Box sx={activeValidación}>SOPs</Box>
                <Box sx={activeValidación}>Adjuntos</Box>
            </Card>
      </Card>

      
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-evenly' , width: '100%' }}>
            <Card sx={validacionCardsStyles}>
            <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 50, // Adjust size as needed
                height: 50, // Adjust size as needed
                borderRadius: '50%', // Makes it a circle
                backgroundColor: theme.palette.primary.main, // Primary color for the circle
                color: 'white', // Icon color (white for contrast)
                }}
            >
                <FileTextFilled />
            </Box>
                <Typography sx={validacionCardsFontColor}>Documentos</Typography>
            </Card>

            <Card sx={validacionCardsStyles}>
            <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 50, // Adjust size as needed
                height: 50, // Adjust size as needed
                borderRadius: '50%', // Makes it a circle
                backgroundColor: '#13C2C2',
                color: 'white', // Icon color (white for contrast)
                }}
            >
                <ReconciliationFilled />
            </Box>
                <Typography sx={validacionCardsFontColor}>Reports</Typography>
            </Card>

            <Card sx={validacionCardsStyles}>
                <Box
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 50, // Adjust size as needed
                    height: 50, // Adjust size as needed
                    borderRadius: '50%', // Makes it a circle
                    backgroundColor: '#F5222D', 
                    color: 'white', // Icon color (white for contrast)
                    }}
                >
                    <CloseCircleFilled />
                </Box>
                <Typography sx={validacionCardsFontColor}>Eventos</Typography>
            </Card>

            <Card sx={validacionCardsStyles}>
                <Box
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 50, // Adjust size as needed
                    height: 50, // Adjust size as needed
                    borderRadius: '50%', // Makes it a circle
                    backgroundColor: '#FAAD14', 
                    color: 'white', // Icon color (white for contrast)
                    }}
                >
                    <HourglassFilled />
                </Box>
                <Typography sx={validacionCardsFontColor}>Riesgo</Typography>
            </Card>
        </Box>
    </Box>
  </Box>


  <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 2,
          flex: 4,
          gap: 0,
          width: '100%', // Maintains the card's width
          maxHeight: '100%', // Ensures the card never surpasses the parent's height
          overflow: 'hidden', // Prevents content from overflowing
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ paddingLeft: 2 }}
        >
          <Typography variant="h5">Acciones Pendientes en Workflow</Typography>
        </Stack>
        <Divider sx={{ marginY: 1 }} />

        {/* Make the TodoListTable flexible but constrained */}
        <Box sx={{ flex: 1, overflow: 'auto' }}>
          <TodoListTable sx={{ marginTop: 0 }} />
        </Box>
      </Card>
</Box>

  );
}

export default MainStatus;
