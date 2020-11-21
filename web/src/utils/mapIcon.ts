import leaflet from 'leaflet';

import mapMarker from '../images/icon-happy.svg';

const mapIcon = leaflet.icon({
    iconUrl: mapMarker,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    // popupAnchor: [0, -60],
    popupAnchor: [170, 2],
})

export default mapIcon;