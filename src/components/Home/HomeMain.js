import React, { Fragment } from "react";
import { TileLayer, Polygon } from "react-leaflet";
import { Tooltip } from "react-leaflet";
import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { data } from "../Global/data2";
const HomeMain = () => {
  const center = [43.7390072740577, 17.61093950780978];

  return (
    <div className="flex">
      <div className="bg-red-200 h-screen container mx-auto flex flex-col items-center">
        <MapContainer
          center={center}
          zoom={6.5}
          className="w-full h-1/2 sm:h-full"
          // scrollWheelZoom={false}
          dragging={false}
        >
          <TileLayer
            url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=IIIGqRrVE9Zu8srlRf8d"
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />
          {data.features.map((feature, index) => {
            const coordinates = feature.geometry.coordinates[0].map((coor) => [
              coor[1],
              coor[0],
            ]);
            console.log(feature);
            return (
              <Polygon
                key={index}
                pathOptions={{
                  fillColor: "#FD8D3C",
                  fillOpacity: 0.7,
                  weight: 2,
                  opacity: 1,
                  dashArray: 3,
                  color: "white",
                }}
                positions={coordinates}
                eventHandlers={{
                  mouseover: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      dashArray: "",
                      fillColor: "#BD0026",
                      fillOpacity: 0.7,
                      weight: 2,
                      opacity: 1,
                      color: "white",
                    });
                  },
                  mouseout: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      fillOpacity: 0.7,
                      weight: 2,
                      dashArray: "3",
                      color: "white",
                      fillColor: "#FD8D3C",
                    });
                  },
                  click: (e) => {},
                }}
              >
                <Tooltip>
                  <div>Kanton: {feature.properties.name}</div>
                  <div>Region: {feature.properties.region}</div>
                </Tooltip>
              </Polygon>
            );
          })}
          <div className="w-1/2 h-1/2">TEKSt</div>
        </MapContainer>
      </div>
    </div>
  );
};

export default HomeMain;
