// ==============================|| Custom Colors for the HVAC Components ||============================== //

import { color } from "framer-motion";


export default function HVACColors(risk) {

  let fontColor = 'white';

    if (risk === 'low') {
      return {
        colorBg: '#55A630',
        colorSecondary: '#55A630',
        fontColor: fontColor,
        fontColorFloorPlanView: '#396F20',
        colorBgFloorPlanView: '#AAE08F',
      };
    } else if (risk === 'medium') {
      return {
        colorBg: '#F26418',
        colorSecondary: '#F3722C',
        fontColor: fontColor,
        colorBgFloorPlanView: '#F59E51',
        fontColorFloorPlanView: '#874308',
      };
    }
    else if (risk === 'high') {
        return {
          colorBg: '#D90429',
          colorSecondary: '#D90429',
          fontColor: fontColor,
          colorBgFloorPlanView: '#F94D58',
          fontColorFloorPlanView: '#8A050E',
        };
      }
    // Colors for when everything is okay
    return {
      colorBg:  '#2870B8',
      colorSecondary: '#2F9BF0',
      fontColor: fontColor,
    };
  }