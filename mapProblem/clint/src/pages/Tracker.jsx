import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "leaflet.locatecontrol/dist/L.Control.Locate.min.js";

const Tracker = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      // Map initialization 
      const map = L.map("map").setView([28.3949, 84.1240], 13);

      //osm layer
      const osm = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
      );
      osm.addTo(map);

      L.control.locate().addTo(map);

      mapRef.current = map;
    }
  }, []);

  return (
    <div id="map" style={{ width: "50%", height: "400px" }}></div>
  );
};

export default Tracker;
