import { useState, useEffect } from 'react'
import './App.scss'

/**@components */
import { Header } from '../components/header/index'
import { Map } from '../components/map/index'
import { Chart } from '../components/chart/index'
import { Filter } from '../components/filter/indext'
import { Loading } from '../components/loading'

/**@Material */
import Button from '@mui/material/Button';

/**@utilites */
import getAndSetData from './helper/getAndSetData';


/**@libraries */
import swal from 'sweetalert';
import dayjs from 'dayjs';


//let url='http://127.0.0.1:5000/'
let url = `https://odor-sr7.herokuapp.com/`;
const endPoint = `gasConcentrations`;
const now = dayjs();


function App() {


  const [openLoading, setOpenLoading] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<string>('');
  const [finalDate, setFinalDate] = useState<string>('');
  const [dataResolution, setDataResolution] = useState<number>(0);
  const [concentrations, setConcentrations] = useState<{labels:string[],
                                                        datasets:any[]
                                                      }>({
                                                        labels:[],
                                                        datasets:[]
                                                      })
  const [conFilts, setConFilts] = useState<Array<number>>([0])

  useEffect(() => {

    /**
     * '2023-11-06T20:00:27', //now.subtract(10, 'day').format('YYYY-MM-DDTHH:mm:ss'),
     *  '2023-11-06T21:40:50', // now.format('YYYY-MM-DDTHH:mm:ss'),
     * 
     */

    const FetchData = async () => {


      const resultFetch = await  getAndSetData({
        setOpenLoading,
        url,
        endPoint,
        startDate:  now.subtract(2, 'hours').format('YYYY-MM-DDTHH:mm:ss').toString(),
        endDate: now.format('YYYY-MM-DDTHH:mm:ss').toString()
      })

      

      setConcentrations({
        datasets:resultFetch.data['datasets'],
        labels:resultFetch.data['xAxysData']['data']
      })

 

    }

    FetchData()


  }, [])


  useEffect(() => {

  }, [startDate])

  useEffect(() => {

  }, [finalDate])

  useEffect(() => {

  }, [dataResolution])


  const handleOpenLoading = () => {
    setOpenLoading(true);

  

    setTimeout(() => {

      setOpenLoading(false);

      //swal("Hello world!");
    }, 300)

  }

  return (
    <>

      <Header />

      <div className="container">

        <Map />
        <Chart datasets={concentrations.datasets} 
               labels={concentrations.labels}/>
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
