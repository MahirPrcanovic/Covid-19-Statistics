import React from "react";
import { TileLayer, Polygon } from "react-leaflet";
import { Tooltip } from "react-leaflet";
import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { data } from "../Global/data2";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const doughData = {
  labels: ["Red", "Blue", "Yellow", "Orange", "Pink", "Purple"],
  datasets: [
    {
      label: "Mahir",
      data: [12, 13, 14, 15, 6, 7],
    },
  ],
};
const HomeMain = () => {
  const center = [43.7390072740577, 17.61093950780978];
  return (
    <div>
      <div className="h-screen container mx-auto flex flex-col items-center">
        <MapContainer
          center={center}
          zoom={6.5}
          className="w-full h-3/5 sm:h-full"
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
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-mont text-center pt-3">
            Analitički i grafički prikaz podataka BiH
          </h2>
          <div className="w-11/12 border-2 m-auto text-center mt-2 border-gray-100 flex flex-col gap-2 p-2 drop-shadow-sm font-mont">
            <h2 className="text-gray-600">Ukupan broj testova</h2>
            <h3 className="text-black text-xl  font-bold">1245658</h3>
          </div>
          <div className="grid grid-cols-2 w-11/12 m-auto gap-3">
            <div className=" w-full border-2 m-auto text-center mt-2 border-gray-100 flex flex-col gap-2 p-2 drop-shadow-sm font-mont">
              {" "}
              <h2 className="text-gray-600 text-sm">Ukupno potvrđenih</h2>
              <h3 className="text-black text-xl  font-bold text-red-400">
                250132
              </h3>
            </div>
            <div className=" w-full border-2 m-auto text-center mt-2 border-gray-100 flex flex-col gap-2 p-2 drop-shadow-sm font-mont">
              {" "}
              <h2 className="text-gray-600 text-sm">Ukupno izliječenih</h2>
              <h3 className="text-black text-xl  font-bold text-green-400">
                229841
              </h3>
            </div>
            <div className=" w-full border-2 m-auto text-center mt-2 border-gray-100 flex flex-col gap-2 p-2 drop-shadow-sm font-mont">
              {" "}
              <h2 className="text-gray-600 text-sm">Ukupno umrlih</h2>
              <h3 className="text-black text-xl  font-bold">8858</h3>
            </div>
            <div className="w-full border-2 m-auto text-center mt-2 border-gray-100 flex flex-col gap-2 p-2 drop-shadow-sm font-mont">
              {" "}
              <h2 className="text-gray-600 text-sm">Ukupno aktivnih</h2>
              <h3 className="text-black text-xl  font-bold text-purple-400">
                11433
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Line data={doughData} />
    </div>
  );
};

export default HomeMain;
