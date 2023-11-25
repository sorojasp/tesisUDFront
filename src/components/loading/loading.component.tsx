
/**@React */
import { useState } from 'react'

/**@Material UI */
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';

/**@Styles */
import styles from './styles';
import '../../index.scss'


type Props = {
    openL: boolean,
}


const Loading = ({ openL }: Props) => {

    const [open, setOpen] = useState(openL);
    const handleClose = () => setOpen(false);



    return (
        <Modal
            sx={styles}
            open={open}
            onClose={handleClose}
        >
            <div className="verticalElements">
                <CircularProgress sx={{ color: 'white' }} />
                <p style={{ color: 'white', fontWeight: 'bold' }}>Loading ...</p>
            </div>


        </Modal>
    )
}

export default Loading;