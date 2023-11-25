import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

/**@components */
import { Header } from './components/header/index'
import { Map } from './components/map/index'
import { Chart } from './components/chart/index'
import { Filter } from './components/filter/indext'
import { Loading } from './components/loading'

/**@Material */
import Button from '@mui/material/Button';

/**@utilites */
import getPollutanData from './utils/getData/getData.utils';
import settingsDatasetAdvanced from './utils/setData/setAdvancedData.util'
import  prepareCartesian from './utils/general/arrayCartesianProduct.util'
import  colorGenerator from './utils/general/colorGenerator.utils'

/**@libraries */
import swal from 'sweetalert';


//let url='http://127.0.0.1:5000/'
let url = `https://odor-sr7.herokuapp.com/`;
const endPoint = `gasConcentrations`;

function App() {


  const [openLoading, setOpenLoading] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<string>('');
  const [finalDate, setFinalDate] = useState<string>('');
  const [dataResolution, setDataResolution] = useState<number>(0);
  const [concentration, setConcentration] = useState<Array<number>>([0])
  const [conFilt, setConFilt] = useState<Array<number>>([0])

  useEffect(() => {


    
    const getDataFnc = async () => {
      setOpenLoading(true);
      const pollutanData:any = await getPollutanData(
        '2023-11-06T20:00:27', //now.subtract(10, 'day').format('YYYY-MM-DDTHH:mm:ss'),
        '2023-11-06T21:40:50', // now.format('YYYY-MM-DDTHH:mm:ss'),
        url,
        endPoint);
      setOpenLoading(false);

      console.log(pollutanData)

      const dataSetted=settingsDatasetAdvanced(pollutanData['data'],[5],['CH4','CO2','H2S','NH3','SO2','humidity','temperature'],
                                                               'dateTime',
                                                                prepareCartesian,
                                                                colorGenerator);

      console.log({dataSetted})


    }

    getDataFnc();
  




  }, [])

  useEffect(() => {

  }, [startDate])

  useEffect(() => {

  }, [finalDate])

  useEffect(() => {

  }, [dataResolution])





  const handleOpenLoading = () => {
    setOpenLoading(true);

    console.log('open loading..');

    setTimeout(() => {
      setOpenLoading(false);
      console.log('close loading..')
      //swal("Hello world!");
    }, 300)

  }

  return (
    <>

      <Header />

      <div className="container">

        <Map />
        <Chart></Chart>
        <Filter></Filter>

        <Button onClick={handleOpenLoading}
          variant="outlined"
          size="medium"
        >
          Open modal
        </Button>

        {openLoading && <Loading
          openL={openLoading}
        ></Loading>}


      </div>
    </>
  )
}

export default App
