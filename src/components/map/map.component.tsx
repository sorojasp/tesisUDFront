
/**@map Library */
import { MapContainer, TileLayer, Popup, Marker, } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


/**@assets */
import Nose from '../../assets/nose.png';

/**@styles */
import './styles.scss'

type Props={

    center:string;
    zoom:number;
    markers:Array<[]>;
    urlMarkerIcon:string
}


const Map = () => {

    
  const greenIcon = L.icon({

    iconUrl:  Nose,
    iconSize: [432*0.08, 512*0.08], // size of the icon

});




    return (
        <>
            <div className="leaflet-container">
                <MapContainer center={[4.6990921, -74.118836,18]} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />


                      {[[4.6990921, -74.118836,18]].map((_, index:number) =>
                        <Marker position={[4.6990921, -74.118836,18]} icon={greenIcon} key={index}>
                            <Popup>
                                Localización del sensor
                            </Popup>
                        </Marker>
                    )
                    }



                </MapContainer>
            </div>
        </>
    )
}


export default Map;