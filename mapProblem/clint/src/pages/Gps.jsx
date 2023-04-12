import React, { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function Gps() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/leaflet.js";
    script.async = true;
    script.onload = () => {
      if (!map) {
        const newMap = L.map("map").setView([37.7749, -122.4194], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
          maxZoom: 18,
        }).addTo(newMap);
        setMap(newMap);
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [map]);

  return (
    <div>
      <div id="map" style={{ height: "500px", width: "100%" }}></div>
    </div>
  );
}

export default Gps;
