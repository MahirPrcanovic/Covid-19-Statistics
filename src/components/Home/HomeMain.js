import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { data } from "../Global/data2";
import { bosnaData } from "../Global/ba";
const HomeMain = () => {
  const center = [44.282633098132095, 17.785360738692958];
  // const jsonData = 1;
  // console.log(jsonData);
  const overHandler = (e) => {
    const layer = e.target;
    layer.setStyle({
      weight: 5,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.7,
    });

    // if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    //   layer.bringToFront();
    // }
  };
  return (
    <div className="bg-red-200 h-screen container mx-auto flex flex-col items-center">
      <h1 className="text-lg text-white font-semibold">
        Most up to date Covid-19 statistics!
      </h1>
      {/* <div className="w-16 h-16 bg-[url('./images/background.jpg')] bg-center bg-cover"></div>
       */}
      <MapContainer
        center={center}
        zoom={7.4}
        style={{ width: "100vw", height: "100vh" }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=IIIGqRrVE9Zu8srlRf8d"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        {data.features.map((feature) => {
          const coordinates = feature.geometry.coordinates[0].map((coor) => [
            coor[1],
            coor[0],
          ]);

          return (
            <Polygon
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
            />
          );
        })}
      </MapContainer>
    </div>
  );
};

export default HomeMain;
