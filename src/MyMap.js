import React, { Component } from 'react';
import L from 'leaflet';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Location.css'
import styled from 'styled-components';

class MyMap extends Component {
        
            componentDidMount(){
        
                const position = [40.02, -105.28]
        
                this.map = L.map('map', {
                    center: [ 58 , 16 ],
                    zoom: 6,
                    zoomControl: false,                
                }).setView(position, 12);
                    
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                    detectRetina: true,
                    maxZoom: 20,
                    maxNativeZoom: 17,
                }).addTo(this.map);  
        
                var bikeIcon = L.icon({
                    iconUrl: "assets/bikeIcon.png",       
                    iconSize:     [48, 48], 
                    iconAnchor:   [22, 94], 
                    shadowAnchor: [4, 62], 
                    popupAnchor:  [-3, -76],
                });
        
                L.marker([40.00, -105.35], {icon: bikeIcon}).addTo(this.map).bindPopup("Dustin Green, from Hickory Hills");
                L.marker([39.95, -105.24], {icon: bikeIcon}).addTo(this.map).bindPopup("Jason Finn, from Huntington Beach");
                L.marker([40.06, -105.26], {icon: bikeIcon}).addTo(this.map).bindPopup("Howard Thompson, from Hale");
                L.marker([40.03, -105.23], {icon: bikeIcon}).addTo(this.map).bindPopup("Maggie Lantz, from Dublin");
                L.marker([40.04, -105.26], {icon: bikeIcon}).addTo(this.map).bindPopup("Lawrence Duran, from Fort Myers");
                L.marker([39.96, -105.22], {icon: bikeIcon}).addTo(this.map).bindPopup("Irene Molina, from Tucson");
                L.marker([39.98, -105.21], {icon: bikeIcon}).addTo(this.map).bindPopup("Nancy Garner, from Baltimore");
                L.marker([40.00, -105.25], {icon: bikeIcon}).addTo(this.map).bindPopup("Tara Taylor, from Minneapolis");
                L.marker([40.02, -105.26], {icon: bikeIcon}).addTo(this.map).bindPopup("Alejandro Smith, from Scarborough")
                L.marker([40.02, -105.30], {icon: bikeIcon}).addTo(this.map).bindPopup("Tricia Renshaw, from Mystic");
                L.marker([40.01, -105.20], {icon: bikeIcon}).addTo(this.map).bindPopup("Travis Cook, from Twin Lakes");
                L.marker([39.98, -105.24], {icon: bikeIcon}).addTo(this.map).bindPopup("Joan Brooks, from Norfolk");
                L.marker([39.99, -105.25], {icon: bikeIcon}).addTo(this.map).bindPopup("Joseph Rodgers, from Wayne");
                L.marker([40.01, -105.29], {icon: bikeIcon}).addTo(this.map).bindPopup("Matthew Gregson, from Brashear");
                L.marker([39.97, -105.33], {icon: bikeIcon}).addTo(this.map).bindPopup("Leo Howard, from Dallas");
                L.marker([39.97, -105.27], {icon: bikeIcon}).addTo(this.map).bindPopup("Katie Dunlap, from Marion");
                L.marker([40.00, -105.29], {icon: bikeIcon}).addTo(this.map).bindPopup("Maria Braisden, from Raleigh");
                L.marker([40.05, -105.30], {icon: bikeIcon}).addTo(this.map).bindPopup("Sandy Townsend, from Newport");
                L.marker([39.99, -105.31], {icon: bikeIcon}).addTo(this.map).bindPopup("Melinda Stephenson, from Kahului");
                L.marker([40.01, -105.32], {icon: bikeIcon}).addTo(this.map).bindPopup("Jason Nichols, from Alexandria");
            }
        
            render() {
              const Wrapper = styled.div`
            
                `;
        
                return (
                <div>
                    <h1 className='text-primary title'>Check where our riders are located!</h1>
                    <Wrapper 
                    position ="relative"
                    width= "90%"
                    height = "400px"
                    id="map" />
                </div>
                );
            };
        }
        
export default MyMap;