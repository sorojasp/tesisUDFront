const putSortedDataInDatasets = (dataToChart: {
    datasets: any[],
    xAxysData:any
}, dataSameTimelineFnc: any) => {

    /**
   *@Description: this function put the sorted and fixed data to datasets
   * @Returns {
      datasets:[
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
  
         ],
      xAxysData:{
          data:[]
      }
  
  }
     @params{dataToChart: } same return without xAxysData key
     @params{dataSameTimelineFnc:function } function to put the data in same timeline
  */

     const getArray = (arrayAmount:number, content:any) => {
        /**
         *Description: the function returns a array with elements repeated [{data:[]}, {data:[]}, {data:[]}]
         * Returns {array:[]}
         * @param{arrayAmount:int} amount of elements what user wants in the array
         * @param{content:any} the elements repeated in the array
      
        */
      
        let arrayToReturn = []
      
        for (let i = 0; i < arrayAmount; i++) {
          arrayToReturn.push(content)
        };
      
        return arrayToReturn;
      



    // get the data and dates for each variable
    const dataToPutSameLine = dataToChart['datasets'].map((dataset: any) => {

        return {
            data: dataset['data'],
            dates: dataset['XaxysData']
        }
    })


    // put the data and dates in the same timeline
    const sortedData = dataSameTimelineFnc(dataToPutSameLine, getArray);


    // add the data sorted to the dataToChart
    dataToChart['datasets'].map((dataset, index) => {
        dataset['data'] = sortedData['totalData'][index]['data']
    })

    // add the dates to the dataToChart
    dataToChart['xAxysData'] = {
        'data': sortedData['totalDatesSort'].map((date:any) => {

            return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

        }
        )

    };

    return dataToChart;

}


export default putSortedDataInDatasets;