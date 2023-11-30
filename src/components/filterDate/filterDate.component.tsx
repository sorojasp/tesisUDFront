
import { useState } from 'react';

import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
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
const minDate = dayjs('2023-08-20T02:30:32');  //dayjs('2016-05-03 22:15:01').format('YYYY-MM-DDThh:mm:ss')



type Props = {
    startDate: string,
    setStartDate: any,
    finalDate: string,
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
    const [startDateS, setStartDateS] = useState<Dayjs|null>(null);
    const [finalDateS, setFinalDateS] = useState<Dayjs|null>(null);




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
                                    ampm={false}
                                    maxDate={maxDate}
                                    minDate={minDate}
                                    value={startDateS}
                                    onChange={(newValue) => {
                                        setStartDateS(newValue == null ? null : newValue)
                                        setStartDate(newValue == null ? 'null' : newValue.format('YYYY-MM-DDTH:mm:ss'));
                                        setShowEndDate(true);
                                    }}

                                />
                            </DemoContainer>
                        </LocalizationProvider>

                        {showEndDate && <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={['DateTimePicker']}
                                sx={{ margin: '20px' }}>
                                <DateTimePicker label="Fecha final"
                                    ampm={false}
                                    maxDate={maxDate}
                                    minDate={startDateS}
                                    value={finalDateS}
                                    onChange={ 
                                        (newValue) => {
                                            setFinalDateS(newValue == null ? null : newValue)
                                            setFinalDate(newValue == null ? 'null' : newValue.format('YYYY-MM-DDTH:mm:ss'));
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


