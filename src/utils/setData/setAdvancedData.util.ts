type Dataset={
    label: string,
    data: number[],
    fill: boolean,
    borderColor: string,
    tension: number
  }


const settingsDatasetAdvanced = (data:[], 
                                 nodes:number[], 
                                 variablesToChart:string[], 
                                 xVariable:string, 
                                 combinatoricsFnc:any, 
                                 colorGeneratorFnc:any):{datasets:Dataset[]} => {

    /**
    @Desscription: Set the data according with the number of nodes, this means for each variable and node, the function return a dataset
    @Returns {
        datasets[
            {
             data: [Array],
             label: '2-humidity',
             XaxysData: [Array],
             backgroundColor: 'rgba(132, 79, 119, 1)',
             borderColor: 'rgba(132, 79, 119, 0.5)',
             fill: false,
             borderWidth: 1
  
            },
  
          {
             data: [Array],
             label: '2-humidity',
             XaxysData: [Array],
             backgroundColor: 'rgba(132, 79, 119, 1)',
             borderColor: 'rgba(132, 79, 119, 0.5)',
             fill: false,
             borderWidth: 1
  
          }
  
             ]
  
    }
    @ param {data: } data to chart example from sr7 nose  server
       [{
        CH4: '2008.07',
        CO2: '3266.50',
        H2S: '35.06',
        NH3: '52.41',
        SO2: '236.88',
        dateTime: "2022-09-12T13:01:15",
        humidity: "36.00",
        temperature:"24.00",
        ubication_id: 1
    },{}]
  
    @ param {nodes:int[]} nodes already in the city. each nodes is identified by a integer number
    @ param {variablesToChart:array}: variables that the node is is measuring ['CH4', ]
    @ param {xVariable:} name of time variable  dateTime
    @ param {combinatoricsFnc:} function to get the combinatorics between to arrays
  
  
    */
  
    let nodesGassesombinatorics:any = combinatoricsFnc(nodes, variablesToChart);
    //let nodesXvariablesCombinatorics = combinatoricsFnc(nodes, [xVariable]);
  
  
  
    let datasets:any = [];
  
  
    for (let i = 0; i < nodesGassesombinatorics.length; i++) {
      datasets.push({
        data: [],
        label: nodesGassesombinatorics[i],
        XaxysData: []
      });
    }
  
  
  
    const colors = colorGeneratorFnc(nodesGassesombinatorics.length, 1, 0.5);
    //console.log("colors: ", colors);
  
    data.map((element:any) => {
  
      let datasetsConfigured:any = [];
  
  
      Object.keys(element).map(variable => {
        const combination = `${element.ubication_id}-${variable}`;
  
  
        let dataSetIndex = datasets.findIndex((elementA:any) => elementA.label == combination);
  
        if (dataSetIndex != -1) {
          datasets[dataSetIndex]['data'].push(element[variable]);
          datasetsConfigured.push(dataSetIndex)
  
        }
  
  
      });
  
      datasetsConfigured.map((indice:number) => {
        datasets[indice]['XaxysData'].push(element['dateTime'])
  
      })
  
    })
  
  
  
    nodesGassesombinatorics.map((element:any, index:number) => {
  
      datasets[index]['backgroundColor'] = colors['colorsTransparent1'][index];
      datasets[index]['borderColor'] = colors['colorsTransparent2'][index];
      datasets[index]['fill'] = false;
      datasets[index]['borderWidth'] = 1;
    })
  
    //datasets.pop();
  
    //filter the empty data sets
    datasets = datasets.filter((dataset:any) => dataset.data.length != 0)
  
  
  
    return {
      datasets: JSON.parse(JSON.stringify(datasets))
    }
  
  }


  export default settingsDatasetAdvanced;
  