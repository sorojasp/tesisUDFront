import getAndSetData from './getAndSetData'

//let url='http://127.0.0.1:5000/'
const url = `https://odor-sr7.herokuapp.com/`;
const endPoint = `gasConcentrations`;

/**Libraries*/
//import { Dayjs } from 'dayjs';


const FetchData = async (startDate:string, 
                         finalDate:string, 
                         setOpenLoading:any,
                         setSearchConcentration:any,
                         setConcentrations:any,
                         setConcentrationFil:any
                         ) => {

    setSearchConcentration(false);


    const resultFetch = await getAndSetData({
      setOpenLoading,
      url,
      endPoint,
      startDate: startDate.toString(),
      endDate: finalDate.toString()
    })

    setConcentrations({
      datasets: JSON.parse(JSON.stringify(resultFetch.data['datasets'])),
      labels: JSON.parse(JSON.stringify(resultFetch.data['xAxysData']['data']))
    })

    setConcentrationFil({
      datasets: JSON.parse(JSON.stringify(resultFetch.data['datasets'])),
      labels: JSON.parse(JSON.stringify(resultFetch.data['xAxysData']['data']))
    })

   
  }


  export default FetchData;


