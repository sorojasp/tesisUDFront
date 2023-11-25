// import axios
import axios from "axios"

const pieceOfData = (percentage, data) => {
  /** This function in used to modify the resolution of the data */

  const n = data.length
  //console.log("amount of data: ", n);
  const nPercentage = (n * percentage) / 100
  //console.log("nPercentage: ",nPercentage)

  //console.log("n/nPercentage: ", n/nPercentage)
  const steps = Math.floor(n / nPercentage);

  console.log("steps: ", steps)

  let newArray = []

  let j = 0
  for (let i = 0; i < n; i += steps) {

    newArray[j] = data[i];
    j++;
  }

  newArray = JSON.parse(JSON.stringify(newArray));


  return newArray;



  //console.log(newArray)
  //console.log("amount new Array:", newArray.length)

}

const getPollutanData = async (startTime, endTime, url, endPoint) => {

  /*
  Funciton to get data of pullutan gasses from external server
  @param {startTime:String} = start time to make a query
  @param {endTime:String} = finish time to make a query
  @param {url:String} = url to get the data
  @param {endPoint:String} = end point to get the data
  */

  return new Promise(async (resolve, reject) => {

    try {


      /*
      const data={
        data:[
                  {
                     CH4: '2008.07', CO2: '3266.50', H2S: '35.06', NH3: '52.41', SO2: '236.88',
                     dateTime: "2022-09-12T13:01:15",
                     humidity: "36.00",
                     temperature:"24.00",
                     ubication_id: 1
                  },
                  {
                     CH4: '1974.45', CO2: '3045.00', H2S: '33.26', NH3: '51.89', SO2: '236.88',
                      dateTime: "1986-09-12T13:01:16",
                     humidity: "36.00",
                     temperature:"24.00",
                     ubication_id: 1
                  },
                  {CH4: '1941.23', CO2: '3071.25', H2S: '34.00', NH3: '50.84', SO2: '236.88',
                      dateTime: "2022-09-12T13:01:17",
                     humidity: "36.00",
                     temperature:"24.00",
                     ubication_id: 1
                  },
                  {CH4: '1924.84', CO2: '2971.25', H2S: '33.79', NH3: '49.57', SO2: '236.88',
                      dateTime: "2022-09-12T13:01:18",
                     humidity: "36.00",
                     temperature:"24.00",
                     ubication_id: 2
                  },
                   {
                     CH4: '2008.07', CO2: '3266.50', H2S: '35.06', NH3: '52.41', SO2: '236.88',
                     dateTime: "2085-09-12T13:01:19",
                     humidity: "36.00",
                     temperature:"24.00",
                     ubication_id: 2
                  },
                  {
                     CH4: '1974.45', CO2: '3045.00', H2S: '33.26', NH3: '51.89', SO2: '236.88',
                      dateTime: "2022-09-12T13:01:15",
                     humidity: "36.00",
                     temperature:"24.00",
                     ubication_id: 1
                  },
                  {CH4: '1941.23', CO2: '3071.25', H2S: '34.00', NH3: '50.84', SO2: '236.88',
                      dateTime: "2021-09-12T13:01:15",
                     humidity: "36.00",
                     temperature:"24.00",
                     ubication_id: 1
                  },
                  {CH4: '1924.84', CO2: '2971.25', H2S: '33.79', NH3: '49.57', SO2: '236.88',
                      dateTime: "1985-09-12T13:01:16",
                     humidity: "36.00",
                     temperature:"24.00",
                     ubication_id: 1
                  }
           ]
      }
      */



      const data = await axios.get(`${url}${endPoint}`, {
        params: {
          datetimeStart: startTime,
          datetimeEnd: endTime,
          ubications: "lat:4.697540,lng:-74.114441"
        }
      })




      console.log("data:", data['data']);

      resolve(data);

    } catch (e) {

      reject(false);

    }



  })



}//ok


const showMsgDependingData = (data, customAlertSettings, errorMsg, zeroDataMsg) => {

  /**
  @Description: function to shows messages to user according to the data provided by the server
  @param{data: array|boolean}: pollutan data from the server, if the any error happen then the data will be false
  @param {customAlertSettings:Funtion} = function of custom and show the alerts
  @param {errorMsg:string} : error messsage to show when the required present a error
  @param {zeroDataMsg:string} : message to shows to user  when the require for data gets zero data
  */

  console.log("data.length === 0: ", data.length === 0)
  console.log("data ", data)





  if (data.length === 0) {

    console.log("show alert **")

    customAlertSettings({
      show: true,
      message: zeroDataMsg,
      tittle: '⚠ Atención!',
      variant: 'warning'

    });




  } else if (data == false) {

    customAlertSettings({
      show: true,
      message: errorMsg,
      tittle: '❌ Error!',
      variant: 'danger'
    });


  }

  setTimeout(() => {
    customAlertSettings({
      show: false,
      message: null,
      tittle: null,
      variant: null

    });

  }, 1500)




}//notused



// new functions
const colorGenerator = (colorsAmount, transparent, transparentSecondOption) => {
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


}//ok

const prepareCartesian = (arr1 = [], arr2 = []) => {
  /** the function return tne combinatorics between to arrays
  Returns: {res:any[]} the funtion return a array with the combinatorics of the elements in arr1 and arr2
  @param {arr1: any[]}
  @param {arr1: any[]}

  */
  const res = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      res.push(arr1[i] + "-" + arr2[j])
    }
  };
  return res;
};//ok

const settingsDatasetAdvanced = (data, nodes, variablesToChart, xVariable, combinatoricsFnc, colorGeneratorFnc) => {

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

  let nodesGassesombinatorics = combinatoricsFnc(nodes, variablesToChart);
  let nodesXvariablesCombinatorics = combinatoricsFnc(nodes, [xVariable]);



  let datasets = [];


  for (let i = 0; i < nodesGassesombinatorics.length; i++) {
    datasets.push({
      data: [],
      label: nodesGassesombinatorics[i],
      XaxysData: []
    });
  }



  const colors = colorGeneratorFnc(nodesGassesombinatorics.length, 1, 0.5);
  //console.log("colors: ", colors);

  data.map(element => {

    let datasetsConfigured = [];


    Object.keys(element).map(variable => {
      const combination = `${element.ubication_id}-${variable}`;


      let dataSetIndex = datasets.findIndex((element) => element.label == combination);

      if (dataSetIndex != -1) {
        datasets[dataSetIndex]['data'].push(element[variable]);
        datasetsConfigured.push(dataSetIndex)

      }


    });

    datasetsConfigured.map(indice => {
      datasets[indice]['XaxysData'].push(element['dateTime'])

    })

  })



  nodesGassesombinatorics.map((element, index) => {

    datasets[index]['backgroundColor'] = colors['colorsTransparent1'][index];
    datasets[index]['borderColor'] = colors['colorsTransparent2'][index];
    datasets[index]['fill'] = false;
    datasets[index]['borderWidth'] = 1;
  })

  //datasets.pop();

  //filter the empty data sets
  datasets = datasets.filter(dataset => dataset.data.length != 0)



  return {
    datasets: JSON.parse(JSON.stringify(datasets))
  }

}//ok

const dataSameTimeline = (dataTosettting, getArrayFnc) => {

  /**
   Description:  this function puts the data to draw in the same timeline, this means can draw all
                the variable no matter the data has different size.
   *Returns:
            {
              data:[{data:[1,2,3]},{data:[7,8,9]},{data:[5,2,3]}]
              totalDatesSort:[2006-09-12T13:01:18.000Z,2011-07-12T13:01:17.000Z,2022-09-12T13:01:18.000Z,]
            }

              * @param{getArrayFnc:function} this function returns a array with element repeated n times, for example: [{data:[]},{data:[]},{data:[]},{data:[]}]
              * @param{dataTosettting:{date:[],data:[]}[]
                 example of dataTosettting
            [{
              dates:["2085-07-12T13:01:17", "2022-09-12T13:01:18", "2058-10-12T13:01:19"],
              data:[56,45,78]
            },
            {
              dates:["2085-07-12T13:01:17", "2022-09-12T13:01:18"],
              data:[56,45]
            }]
          }
   *
  */


  // put the  all dates in the same array separates by [], according with the elements of array 'dataTosettting'
  const totalDates = dataTosettting.map(element => element['dates'])

  let totalDatesSortI = [];//dates without sort

  // get all date in a same array
  totalDates.map(dateArray => {
    dateArray.map(date => {

      const newDate = new Date(date);

      //check what the dates  are not repeated
      const datesFound = totalDatesSortI.find(element => element.getTime() == newDate.getTime());

      if (datesFound == undefined) {
        totalDatesSortI.push(newDate);// all dates without sort
      }

    })
  })

  // all the dates sorted
  let totalDatesSort = totalDatesSortI.sort(
    (objA, objB) => Number(objA) - Number(objB),
  );

  let totalData = [];


  for (let i = 0; i < dataTosettting.length; i++) {
    totalData.push({
      data: getArrayFnc(totalDatesSort.length, null)
    })
  };



  dataTosettting.map((element, index) => {
    element['dates'].map((date, dateIndex) => {

      //console.log("dateIndex: ", dateIndex)
      const isSameDate = (elemento) => elemento.getTime() == new Date(date).getTime();
      const indexFound = totalDatesSort.findIndex(isSameDate);
      totalData[index]['data'][indexFound] = element['data'][dateIndex];

    })

  })

  //console.log("totalData: ",totalData);
  //console.log("totalDatesSort:", totalDatesSort);

  return {
    totalData,
    totalDatesSort
  }


}//ok

const getArray = (arrayAmount, content) => {
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



}// ok

const putSortedDataInDatasets = (dataToChart, dataSameTimelineFnc) => {

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



  // get the data and dates for each variable
  const dataToPutSameLine = dataToChart['datasets'].map(dataset => {

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
    'data': sortedData['totalDatesSort'].map(date => {

      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    }
    )

  };

  return dataToChart;

}//ok


const functions = {
  pieceOfData,
  getPollutanData,
  colorGenerator,
  prepareCartesian,
  settingsDatasetAdvanced,
  dataSameTimeline,
  getArray,
  putSortedDataInDatasets,
  showMsgDependingData

}

export default functions;
