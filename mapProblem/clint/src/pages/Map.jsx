import React, { useState, useEffect } from 'react';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Define custom marker icon
const markerIcon = new L.Icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

function Map() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/PlaceGet');
        setPlaces(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPlaces();
  }, []);

  return (
    <MapContainer center={[23.810331, 90.412521]} zoom={13} scrollWheelZoom={true} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {places.map(place => (
        <Marker key={place._id} position={[place.position.coordinates[0], place.position.coordinates[1]]} icon={markerIcon}>
          <Popup>{place.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;