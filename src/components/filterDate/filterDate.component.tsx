
import { useState } from 'react';

import dayjs, { Dayjs } from 'dayjs';
/**@Material UI */
import Modal from '@mui/material/Modal';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

/**@Material */
import Button from '@mui/material/Button';


/**styles */
import './filterDate.styles.scss'
import '../../index.scss'




const maxDate = dayjs();
const minDate = dayjs('2023-08-20T02:30:32');

type Props = {
    startDate: Dayjs | null,
    setStartDate: any,
    finalDate: Dayjs | null,
    setFinalDate: any,
    setOpenDataFilter: any,
    setSearchConcentration:any
}

const FilerDate = ({
    startDate,
    setStartDate,
    finalDate,
    setFinalDate,
    setOpenDataFilter,
    setSearchConcentration
}: Props) => {

    const [showEndDate, setShowEndDate] = useState<boolean>(false);
    const [enableButton, setEnableButton] = useState<boolean>(false);



    return (
        <>
            <div>
                <Modal
                    open={true}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <div className='filterDate'>
                        <p className='horizontalElements'>Filter date component 📅</p>

                        <LocalizationProvider
                            dateAdapter={AdapterDayjs}

                        >
                            <DemoContainer components={['DateTimePicker']}
                                sx={{ margin: '20px' }}>
                                <DateTimePicker label="Fecha inicial"
                                    maxDate={maxDate}
                                    minDate={minDate}
                                    value={startDate}
                                    onChange={(newValue) => {
                                        setStartDate(newValue);
                                        setShowEndDate(true);
                                        console.log('start date selected')
                                    }}

                                />
                            </DemoContainer>
                        </LocalizationProvider>

                        {showEndDate && <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={['DateTimePicker']}
                                sx={{ margin: '20px' }}>
                                <DateTimePicker label="Fecha final"
                                    maxDate={maxDate}
                                    minDate={startDate}
                                    value={finalDate}
                                    onChange={ 
                                        (newValue) => {
                                            setFinalDate(newValue);
                                            setShowEndDate(true);
                                            setEnableButton(true);
                                        }
                                    }
                                />
                            </DemoContainer>
                        </LocalizationProvider>}

                        <Button 
                            className='filterDate-button'
                            id='fetchButton'
                            variant="outlined"
                            size="medium"
                            disabled={!enableButton}
                            onClick={()=>{
                                setSearchConcentration(true)
                                setOpenDataFilter(false) }}
                            >
                            Buscar concentraciones
                        </Button>

                        <Button 
                            className='filterDate-button'
                            
                            variant="outlined" 
                            color="error"
                            onClick={() => { setOpenDataFilter(false) }}>
                            Cerrar
                        </Button>

                    </div>
                </Modal>
            </div>
        </>
    )



}


export default FilerDate;


