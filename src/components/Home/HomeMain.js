import React from "react";
import { TileLayer, Polygon } from "react-leaflet";
import { Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { data } from "../Global/data2";
const HomeMain = () => {
  const center = [44.282633098132095, 17.785360738692958];

  const onEach = () => {};
  return (
    <div className="bg-red-200 h-screen container mx-auto flex flex-col items-center">
      <h1 className="text-lg text-white font-semibold">
        Most up to date Covid-19 statistics!
      </h1>
      {/* <div className="w-16 h-16 bg-[url('./images/background.jpg')] bg-center bg-cover"></div>
       */}
      <MapContainer center={center} zoom={6.5} className="w-full h-full">
        <TileLayer
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=IIIGqRrVE9Zu8srlRf8d"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        {data.features.map((feature, index) => {
          const coordinates = feature.geometry.coordinates[0].map((coor) => [
            coor[1],
            coor[0],
          ]);

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
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>;
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
            />
          );
        })}
      </MapContainer>
    </div>
  );
};

export default HomeMain;
