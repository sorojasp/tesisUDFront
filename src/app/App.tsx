import { useState, useEffect } from 'react'
import './App.scss'

/**@components */
import { Header } from '../components/header/index';
import { Map } from '../components/map/index';
import { Chart } from '../components/chart/index';
import { Filter } from '../components/filter/indext';
import { Loading } from '../components/loading';
import {FilerDate} from '../components/filterDate'

/**@Material */
import Button from '@mui/material/Button';

/**@utilites */

import FetchData from './helper/fetchConcentrations'
import handleResolution from './helper/handleResolution'
import pieceOfData from '../utils/graphicData/dataResolution.util';


/**@libraries */
//import swal from 'sweetalert';
import dayjs, { Dayjs } from 'dayjs';






function App() {


  const [openLoading, setOpenLoading] = useState<boolean>(false);
  const [openDateFilter, setOpenDataFilter] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<string>(dayjs('2016-05-03 22:15:01').format('YYYY-MM-DDTH:mm:ss'));
  const [finalDate, setFinalDate] = useState<string>(dayjs().format('YYYY-MM-DDTH:mm:ss'));
  const [searchConcentration, setSearchConcentration] = useState(false);
  const [startDatePrint, setStartDatePrint] = useState<string>(dayjs().subtract(7, 'days').format('YYYY-MM-DDTH:mm:ss'));
  const [finalDatePrint, setFinalDatePrint] = useState<string>(dayjs().format('YYYY-MM-DDTH:mm:ss'));
  const [concentrations, setConcentrations] = useState<{
    labels: string[],
    datasets: any[]
  }>({
    labels: [],
    datasets: []
  })
  const [concentrationFiltered, setConcentrationFil] = useState<{
    labels: string[],
    datasets: any[]
  }>({
    labels: [],
    datasets: []
  })
  const [resolution, setResolution] = useState<number>(100)

  useEffect(() => {

    /**
     * '2023-11-06T20:00:27', //now.subtract(10, 'day').format('YYYY-MM-DDTHH:mm:ss'),
     *  '2023-11-06T21:40:50', // now.format('YYYY-MM-DDTHH:mm:ss'),
     * 
     */

    

    FetchData(
              dayjs().subtract(7, 'days').format('YYYY-MM-DDTH:mm:ss'), 
              dayjs().format('YYYY-MM-DDTH:mm:ss'), 
              setOpenLoading,
              setSearchConcentration,
              setConcentrations,
              setConcentrationFil
               )
  }, [])


  useEffect(()=>{

    if(searchConcentration===true){

      setSearchConcentration(false);

      setStartDatePrint(startDate)
      setFinalDatePrint(finalDate)

      FetchData(
        startDate, 
        finalDate, 
        setOpenLoading,
        setSearchConcentration,
        setConcentrations,
        setConcentrationFil
        )

        

      
    }
  },[searchConcentration])


  useEffect(() => {

    handleResolution( 
       pieceOfData,
      concentrations,
      resolution,
      concentrationFiltered,
      setConcentrationFil)


  }, [resolution])




  return (
    <>

      <Header />

      <div className="container">

        <Map />
        
        <Chart 
          datasets={concentrationFiltered.datasets}
          labels={concentrationFiltered.labels} />

        <div className='row distributed datesAdversement'>
          <div><p id="title">Fecha Inicial:</p> {startDatePrint}</div>
          <div><p id="title">Fecha Final:</p> {finalDatePrint}</div>

        </div>

        
        <Filter
          resolution={resolution}
          setResolution={setResolution}

        ></Filter>

        <Button 
          className='searchButton'
          onClick={()=>{setOpenDataFilter(true)}}
          variant="outlined"
          size="medium">
            Nueva busqueda
        </Button>
        
        {openLoading && <Loading openL={openLoading}/>}

        {openDateFilter && <FilerDate
          startDate={startDate}
          setStartDate={setStartDate}
          finalDate={finalDate}
          setFinalDate={setFinalDate}
          setOpenDataFilter={setOpenDataFilter}
          setSearchConcentration={setSearchConcentration}
        />}


      </div>
    </>
  )
}

export default App
