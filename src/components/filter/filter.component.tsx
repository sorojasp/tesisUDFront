import Slider from '@mui/material/Slider';
/**styles */

import './filter.style.scss'




type Props = {
    resolution: number,
    setResolution: any,

}

const Filter = ({ resolution,
    setResolution,
}: Props) => {



    const handleSliderChange = (event:unknown, newValue: number | number[]) => {
        event
        setResolution(newValue as number);

    };





    return (
        <>

            <div className='filter'>

                <p>Resolución {resolution} %</p>
                <Slider defaultValue={50}
                    onChange={handleSliderChange}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    value={resolution} />

            </div>

        </>

    )
}


export default Filter;