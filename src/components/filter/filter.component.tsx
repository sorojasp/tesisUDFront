import Slider from '@mui/material/Slider';

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const today = dayjs();
const tomorrow = dayjs().add(1, 'day');


const Filter = () => {




    return (
        <>
            <h3>Filter Component</h3>

            <p>Resolución</p>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                    <DateTimePicker label="Fecha inicial" />
                </DemoContainer>
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                    <DateTimePicker label="Fecha final" maxDate={tomorrow}   minDate={today}   />
                </DemoContainer>
            </LocalizationProvider>
        </>

    )
}


export default Filter;