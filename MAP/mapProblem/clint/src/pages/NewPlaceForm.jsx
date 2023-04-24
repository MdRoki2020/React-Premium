import React, { useState, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import L from 'leaflet';
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

const NewPlaceForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [position, setPosition] = useState([23.810331, 90.412521]); // default position

  const markerRef = useRef();

  console.log(position);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPlace = {
      name,
      description,
      image,
      position,
    };
    try {
      const res = await axios.post('http://localhost:5000/api/v1/PlacePost', newPlace);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMapClick = (event) => {
    setPosition([event.latlng.lat, event.latlng.lng]);
  };

  const handleMarkerDragEnd = () => {
    const marker = markerRef.current;
    if (marker != null) {
      const newPosition = marker.getLatLng();
      setPosition([newPosition.lat, newPosition.lng]);
      marker.bindPopup(`${newPosition.lat.toFixed(5)}, ${newPosition.lng.toFixed(5)}`).openPopup();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <br />
      <label>
        Image link:
        <input type="text" value={image} onChange={(event) => setImage(event.target.value)} />
      </label>
      <br/>
      <button type="submit">Add Place</button>
      <MapContainer center={position} zoom={13} onClick={handleMapClick} scrollWheelZoom={true} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={markerIcon} draggable={true} eventHandlers={{ dragend: handleMarkerDragEnd }} ref={markerRef}>
          <Popup>{position[0].toFixed(5)}, {position[1].toFixed(5)}</Popup>
        </Marker>
      </MapContainer>
    </form>
  );
};

export default NewPlaceForm;
