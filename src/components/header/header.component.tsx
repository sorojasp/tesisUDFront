import './header.styles.scss'

import SR7Picture from '../../assets/picture_SR.jpeg';
import RecyAppLogo from '../../assets/recyapp_logo_2.png'


/**@general styles */

import './../../index.scss';

const Header = () => {


    return (
        <>
            <div className="header row distributed">

                <img src={SR7Picture} className="icon-header" style={{ borderRadius: '5%' }}
                    width='40px'
                    height='auto'
                />

                <p>👃🏼 SR7Nose</p>

                <img src={RecyAppLogo} className="icon-header" />


            </div>
        </>
    )
}



export default Header;