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

import swal from 'sweetalert';



function App() {


  const [openLoading, setOpenLoading] = useState<boolean>(false);


  const handleOpenLoading = () => {
    setOpenLoading(true);

    setTimeout(()=>{
      setOpenLoading(false);
      swal("Hello world!");
     },2000)
   
  }



  return (
    <>
      <div id="container">
        <Header></Header>
        <Map/>


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
