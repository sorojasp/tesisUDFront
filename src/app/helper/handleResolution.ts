

const handleResolution =(
    pieceOfData:any,
    concentrations:any,
    resolution:any,
    concentrationFiltered:any,
    setConcentrationFil:any


)=>{

    const datasets = [];

    for (let i = 0; i < concentrations.datasets.length; i++) {
      datasets.push({
        backgroundColor: null,
        borderColor: null,
        borderWidth: null,
        data: [],
        fill: false,
        label: null
      });


      datasets[i]['data'] = pieceOfData(parseInt(resolution.toString()), concentrations.datasets[i]['data']);
      datasets[i]['backgroundColor'] = concentrations.datasets[i]['backgroundColor'];
      datasets[i]['borderColor'] = concentrations.datasets[i]['borderColor'];
      datasets[i]['borderWidth'] = concentrations.datasets[i]['borderWidth'];
      datasets[i]['fill'] = concentrations.datasets[i]['fill'];
      datasets[i]['label'] = concentrations.datasets[i]['label'];
    }


    setConcentrationFil({
      datasets: JSON.parse(JSON.stringify(datasets)),
      labels: pieceOfData(parseInt(resolution.toString()), concentrations.labels)
    });

    //console.log("concentrations:", concentrations)
    //console.log("concentrations Fil:", concentrationFiltered)




}


export default handleResolution