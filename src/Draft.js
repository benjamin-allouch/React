import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

class MyMap2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             lat: 40.02,
             lng: -105.25,
             zoom: 12
        }
    }
    
    render() {

        var bikeIcon = L.icon({
            iconUrl: "assets/bikeIcon.png",       
            iconSize:     [48, 48], 
            iconAnchor:   [22, 94], 
            shadowAnchor: [4, 62], 
            popupAnchor:  [-3, -76],
        });

        const position = [this.state.lat, this.state.lng];
        return (
            <div id="container">
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer 
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    detectRetina= 'true'
                    maxZoom= '20'
                    maxNativeZoom= '17'
                />
                <Marker icon={bikeIcon} position={[40.00, -105.35]}>
                    <Popup>
                    Dustin Green, from Hickory Hills.
                    </Popup>
                </Marker>
            </Map>
            </div>
        )
    }
    
}

ReactDOM.render(<MyMap2 />, document.getElementById('container'))

export default MyMap2;



