export default function HVACFonts(lastMeasureComp = false, floorViewComponent = false) {
    let typoTitle = '1.8rem';
    let justify = 'start';
    let arrowSize = '2.0rem';
    let boxFont = '1.0rem';



    if(lastMeasureComp == true){
      typoTitle = '2.4rem';
      justify = 'center';
      arrowSize = '3.5rem';
    }

    if(floorViewComponent == true){
      typoTitle = '1.2rem';
      justify = 'start';
      arrowSize = '1.2rem';
      boxFont = '0.9rem';
    }

return {
    typoTitle: typoTitle,
    justify: justify,
    arrowSize: arrowSize,
    boxFont: boxFont
  };
}