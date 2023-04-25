import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "leaflet.locatecontrol/dist/L.Control.Locate.min.js";

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
  const mapRef = useRef(null);

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

    if (!mapRef.current) {

      const map = L.map("map").setView([23.810331, 90.412521], 13);

      const osm = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        }
      );
      osm.addTo(map);

      L.control.locate().addTo(map);

      mapRef.current = map;
    }
  }, []);

  useEffect(() => {
    // Add markers for places to the map
    places.forEach(place => {
      const popupContent = `
        <div style="width: 200px;">
          <img src="${place.image}" alt="${place.name}" style="width: 100%;" />
          <p style="margin-bottom: 0;">${place.name}</p>
        </div>
      `;
      const marker = L.marker([place.position.coordinates[0], place.position.coordinates[1]], {
        icon: markerIcon
      }).addTo(mapRef.current).bindPopup(popupContent);
    });
  }, [places]);

  return (
    <div id="map" style={{ width: "100%", height: "400px" }} />
  );
}

export default Map;
