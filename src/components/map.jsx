// components/Map .js
"use client";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

export default function Map ({ salom }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import("leaflet").then(L => {
        if (!mapRef.current) {
          mapRef.current = L.map('map').setView([41.296195423949996, 69.24763083457948], 13);

          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(mapRef.current);
        }

        return () => {
          if (mapRef.current) {
            mapRef.current.remove();
            mapRef.current = null;
          }
        };
      });
    }
  }, []);

  console.log(salom);

  return (
    <div className="relative z-0 h-[91vh] mt-12" id="map" />
  );
}
