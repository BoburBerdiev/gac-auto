// "use client"
// import {
//   MapContainer,
//   TileLayer,
//   CircleMarker,
//   Popup,
// } from "react-leaflet";

// import "leaflet/dist/leaflet";

// export default function Map() {
//   return (
//     <div>
//         <MapContainer  center={[40.609787846393196, 20.7890265133657]} zoom={5}>
//         <TileLayer
//             attribution='SALOM'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <CircleMarker
//             className="n w-[150px] h-[150px]"
//             center={[40.609787846393196, 20.7890265133657]}
//             radius={10}
//             color="transparent"
//             fillColor="green"
//             fillOpacity={0.5}
//           >
//             <Popup className="w-[460px] h-[150px]">
//               <p className="text-[25px]">My Location </p>
//             </Popup>
//           </CircleMarker>
//         </MapContainer>
//     </div>
//   )
// }
