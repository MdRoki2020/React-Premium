import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const LocationTracker = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const socketRef = useRef(null);

  useEffect(() => {
    // Create Leaflet map instance
    const map = L.map(mapRef.current).setView([0, 0], 13);

    // Add tile layer to map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    // Create marker instance and add to map
    const marker = L.marker([0, 0]);
    marker.addTo(map);
    markerRef.current = marker;

    // Create WebSocket connection and listen for location updates
    const socket = new WebSocket('ws://localhost:8080');
    socket.addEventListener('message', (event) => {
      const location = JSON.parse(event.data);

      // Update marker position
      marker.setLatLng([location.lat, location.lng]);

      // Center map on marker position
      map.setView([location.lat, location.lng], 13);
    });
    socketRef.current = socket;

    // Close WebSocket connection on component unmount
    return () => {
      socket.close();
    };
  }, []);

  return <div id="map" ref={mapRef} style={{ height: '100vh' }}></div>;
};

export default LocationTracker;
