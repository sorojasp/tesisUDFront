const colorGenerator = (colorsAmount:number, 
                        transparent:number, 
                        transparentSecondOption:number):{
                                                          colorsTransparent1:string[],
                                                          colorsTransparent2:string[]} => {
    /**
     * Returns:object a object with two keys, in each one have the colors what user wants but with diferents transparents values
     * @colorsAmount:int amount of colors returned
     * @transparent: float level of transparent of the first group of colors 0-1
     * @transparentSecondOption: float level of transparent of the second group of colors 0-1
    */
    let colorsTransparent1 = [];
    let colorsTransparent2 = [];
    const spread = 85;
    for (let row = 0; row < colorsAmount; row++) {
      let color = [];
      for (let c = 0; c < 3; c++) {
        const max = 255 - spread;
        const min = 0 + spread;
        color[c] = Math.floor(Math.random() * (max - min + 1)) + min;
      }
  
  
  
      for (let i = 0; i < 1; i++) {
        const max = color[0] + spread;
        const min = color[0] - spread;
  
        const r = Math.floor(Math.random() * (max - min + 1)) + min;
        const g = Math.floor(Math.random() * (max - min + 1)) + min;
        const b = Math.floor(Math.random() * (max - min + 1)) + min;
  
        colorsTransparent1.push(`rgba(${r}, ${g}, ${b}, ${transparent})`);
        colorsTransparent2.push(`rgba(${r}, ${g}, ${b}, ${transparentSecondOption})`);
  
      }
  
    }
  
    return {
      colorsTransparent1,
      colorsTransparent2
    };
  }


  export default colorGenerator;