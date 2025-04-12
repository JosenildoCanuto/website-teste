import React from "react";
import { Grid, Box, Paper} from "@mui/material";
import { styled } from '@mui/material/styles';
import FloorPlanRoomInfo from "./floor-plan-components/FloorPlanRoomInfo";
import HVACColors from "themes/custom/hvac-themes/HVACColors";
import { padding } from "@mui/system";

const roomInfo = {
   330: {pressure: 5, risk: 'medium', flow: 'S', differential: 5},
   331:{pressure: 5, risk: 'high', flow: 'S', differential: 5},
   332: {pressure: 10, risk: 'low', flow: 'N', differential: 5},
};

function decideFloorPlanRoomBg(risk) {
   let color = HVACColors(risk).colorBgFloorPlanView;
   return color;
}


const Cleanliness = ({grade, children}) => {
   const zone = {
      A: {color: "primary.400", title: "Grade A (Critical Zone)", description: "Laminar flow with high air change rates; ISO Class 5 equivalent"},
      B: {color: "primary.200", title: "Grade B ", description: "For background environments to Grade A; ISO Class 5-7 equivalent"},
      C: {color: "primary.lighter", title: "Grade C", description: "Lower standards for less critical activities; ISO Class 7-9 equivalent"},
      D: {color: "secondary.200", title: "Grade D", description: "Lower standards for less critical activities; ISO Class 7-9 equivalent"},
   }
   return (
      <Box sx={{ bgcolor: zone[grade]?.color, padding: 2, textAlign: 'center', border: '1px solid #ccc' }}>
         { children }  { grade }
      </Box>
   )
}

const Room = styled(Paper)(({ theme }) => ({
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: 'start',
   color: "theme.palette.text.secondary",
   ...theme.applyStyles('dark', {
     backgroundColor: '#1A2027',
   }),
 }));

let colors = HVACColors('medium');

 const Way = styled(Paper)(({ theme }) => ({
   backgroundColor: 'lightgray',
   padding: theme.spacing(1),
   textAlign: 'start',
   color: theme.palette.text.secondary,
   boxShadow: 'none',
   border: 'none',
   borderRadius: 0,
 }));


const FloorPlan= () => {

   return (
      <>
    <Box sx={{ width: 1 }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 2 }}>
        {/* Line 01 */}
        
        <Box sx={{ gridColumn: 'span 2', gap: 0.5, display: 'flex', flexDirection: 'column' }}>
          <Room sx={{height: { xs: '25px', sm: '50px', md: '75px' }, 
                     backgroundColor: `${decideFloorPlanRoomBg(roomInfo[332].risk)} !important`, }}>
                     332
                     <Box sx={{display: 'flex', alignItems: 'end', justifyContent: 'center'}}>                      
                        <FloorPlanRoomInfo 
                        roomPressure={roomInfo[332].pressure} 
                        risk={roomInfo[332].risk}
                        flow={roomInfo[332].flow}
                        differential={roomInfo[332].differential}
                        >

                        </FloorPlanRoomInfo>
                      </Box>

          </Room> 

          <Room sx={{height: { xs: '50px', sm: '75px', md: '115px' }}}>333</Room>
          <Room sx={{height: { xs: '20px', sm: '40px', md: '60px' }}}>334</Room>
          <Room sx={{height: { xs: '25px', sm: '50px', md: '75px' }}}>335</Room>
          <Room sx={{height: { xs: '20px', sm: '40px', md: '60px' }}}>336</Room>
          <Room sx={{height: { xs: '20px', sm: '40px', md: '60px' }}}>337</Room>
          <Room sx={{height: { xs: '20px', sm: '40px', md: '60px' }}}>337</Room>
          <Room sx={{height: { xs: '20px', sm: '40px', md: '60px' }}}>339</Room>
          <Room sx={{height: { xs: '20px', sm: '40px', md: '60px' }}}>339</Room>
          <Box sx={{ gridColumn: 'span 10', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 2 }}>
               <Way sx={{gridColumn: 'span 5', height: { xs: '25px', sm: '50px', md: '75px' }}}></Way>
               <Room sx={{gridColumn: 'span 7', height: { xs: '50px', sm: '75px', md: '75px' }}}>339</Room>
               <Way sx={{gridColumn: 'span 8', height: { xs: '25px', sm: '50px', md: '75px' }}}>340</Way>
               <Room sx={{gridColumn: 'span 4', height: { xs: '50px', sm: '75px', md: '75px' }}}></Room>
               <Way sx={{gridColumn: 'span 12', height: { xs: '25px', sm: '50px', md: '75px' }}}></Way>
         </Box>
        </Box>
        
        
        <Box sx={{ gridColumn: 'span 6', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 2}}>

            <Box sx={{ gridColumn: 'span 12', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 2}}>
               
               <Box sx={{ gridColumn: 'span 2'}}>
               </Box>
               
               <Box sx={{ gridColumn: 'span 3', gap: 0.5, display: 'flex', flexDirection: 'column'}}>

                  <Room sx={{
                     backgroundColor: `${decideFloorPlanRoomBg(roomInfo[331].risk)} !important`, 
                     display: 'flex', 
                     flexDirection: 'row', 
                     alignItems: 'center',
                     justifyContent: 'start',
                        
                  }} 
                  >
                     331
                     <Box sx={{marginLeft: '10px'}}>
                        <FloorPlanRoomInfo 
                        roomPressure={roomInfo[331].pressure} 
                        risk={roomInfo[331].risk}
                        flow={roomInfo[331].flow}
                        differential={roomInfo[331].differential}

                        >

                        </FloorPlanRoomInfo>      
                     </Box>

                  
                  </Room>

                  <Room sx={{height: { xs: '25px', sm: '50px', md: '75px' }, backgroundColor: `${decideFloorPlanRoomBg(roomInfo[330].risk)} !important`}}>
                     330
                     <Box sx={{display: 'flex', alignItems: 'end', justifyContent: 'center'}}>
                        <FloorPlanRoomInfo 
                        roomPressure={roomInfo[330].pressure} 
                        risk={roomInfo[330].risk}
                        flow={roomInfo[330].flow}
                        differential={roomInfo[330].differential}

                        >

                        </FloorPlanRoomInfo>      
                     </Box>


                  </Room>
               </Box>
               
               <Box sx={{ gridColumn: 'span 3'}}>
                  <Room sx={{height: { xs: '50px', sm: '75px', md: '115px' }}}> 329 </Room>
               </Box>
               
               <Box sx={{ gridColumn: 'span 4' }}>
                  <Room sx={{height: { xs: '50px', sm: '75px', md: '115px' }}}>328</Room>
               </Box>
            </Box>

            <Box sx={{ gridColumn: 'span 12', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 2 }}>
                  <Box sx={{gridColumn: 'span 12'}}>
                  </Box>
                  <Room sx={{gridColumn: 'span 2', height: { xs: '50px', sm: '75px', md: '75px' }}}>323</Room>
                  <Room sx={{gridColumn: 'span 3', height: { xs: '50px', sm: '75px', md: '75px' }}}>342</Room>
                  <Room sx={{gridColumn: 'span 3', height: { xs: '50px', sm: '75px', md: '75px' }}}>343</Room>
            </Box>
         
         </Box>
        
        <Box sx={{ gridColumn: 'span 4', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 2}}>
            <Way sx={{gridColumn: 'span 8', height: { xs: '50px', sm: '75px', md: '115px' }}}>327</Way>
            <Room sx={{gridColumn: 'span 4', height: { xs: '25px', sm: '50px', md: '75px' }}}>326</Room>
            <Room sx={{gridColumn: 'span 10', height: { xs: '25px', sm: '50px', md: '75px' }}}>326</Room>
            <Box sx={{ gridColumn: 'span 10', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 2 }}>
               <Room sx={{gridColumn: 'span 6', height: { xs: '25px', sm: '50px', md: '75px' }}}>324</Room>
               <Room sx={{gridColumn: 'span 6', height: { xs: '50px', sm: '75px', md: '75px' }}}>323</Room>
               <Room sx={{gridColumn: 'span 12', height: { xs: '50px', sm: '75px', md: '75px' }}}>325</Room>
               <Room sx={{gridColumn: 'span 12', height: { xs: '50px', sm: '75px', md: '75px' }}}>322</Room>
               <Room sx={{gridColumn: 'span 12', height: { xs: '50px', sm: '75px', md: '75px' }}}>316</Room>
               <Room sx={{gridColumn: 'span 12', height: { xs: '50px', sm: '75px', md: '75px' }}}>318</Room>
               <Room sx={{gridColumn: 'span 12', height: { xs: '50px', sm: '75px', md: '75px' }}}>321</Room>
               <Room sx={{gridColumn: 'span 6', height: { xs: '50px', sm: '75px', md: '75px' }}}>320</Room>
               <Room sx={{gridColumn: 'span 6', height: { xs: '50px', sm: '75px', md: '75px' }}}>319</Room>
            </Box>
            <Room sx={{gridColumn: 'span 12', height: { xs: '50px', sm: '75px', md: '75px' }}}>314</Room>
            <Room sx={{gridColumn: 'span 8', height: { xs: '50px', sm: '75px', md: '75px' }}}>312</Room>
            <Way sx={{gridColumn: 'span 12', height: { xs: '50px', sm: '75px', md: '75px' }}}>313</Way>

        </Box>
        
      </Box>
    </Box>


   </>

   );
};

export default FloorPlan