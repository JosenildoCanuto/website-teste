import { CaretUpFilled } from "@ant-design/icons";
import HVACColors from "./HVACColors";
import HVACFonts from "./HVACFonts";

export default function HVACArrow({ risk, flow, lastMeasureComp, floorPlanView = false}) {
  
  const hvacFonts = HVACFonts(lastMeasureComp, floorPlanView);
  const hvacColors = HVACColors(risk);
  let color = hvacFonts.colorBg

  if (floorPlanView) {
    color = hvacColors.fontColorFloorPlanView;
  }
  else {
    color = hvacColors.colorBg;
  }

  // Compute colors based on state
  const colors = HVACColors(risk); // Compute colors based on state

  // Map airflow direction to rotation angle
  const rotationMap = {
    N: 0,
    S: 180,
    E: 90,
    W: -90,
  };

  // Get rotation angle based on airflowDirection
  const rotation = rotationMap[flow] || 0;

  return (
    <CaretUpFilled
      style={{
        transform: `rotate(${rotation}deg)`, 
        color: color,
        fontSize: hvacFonts.arrowSize,
      }} 
    />
  );
}
