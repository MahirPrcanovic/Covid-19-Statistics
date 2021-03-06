import React from "react";
import { TileLayer, Polygon } from "react-leaflet";
import { Tooltip } from "react-leaflet";
import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { data } from "../Global/data2";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const pieData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Maj",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Covid slučajevi",
      data: [200, 130, 140, 150, 60, 70, 200, 300, 400, 200, 250, 300],
      backgroundColor: ["black"],
    },
  ],
};
const doughData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Maj",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Novi slučajevi",
      data: [20, 13, 14, 15, 6, 7, 50, 30, 40, 20, 60, 33],
      backgroundColor: ["red"],
    },
    {
      label: "Oporavljeni",
      data: [45, 20, 25, 11, 65, 75, 55, 35, 45, 25, 65, 35],
      backgroundColor: ["green"],
    },
  ],
};
const HomeMain = () => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const center = [43.7390072740577, 17.61093950780978];
  return (
    <div>
      <div className="h-screen mx-auto flex flex-col items-center lg:flex-row">
        <MapContainer
          center={center}
          zoom={6.5}
          className="w-full h-1/2 lg:w-1/2 lg:h-full"
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
                      fillColor: "blue",
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
        </MapContainer>
        <div className="flex flex-col align-middle justify-center lg:w-1/2 lg:h-full">
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-mont text-center pt-3">
              Analitički i grafički prikaz podataka BiH 2021
            </h2>
            <div className="w-11/12 border-2 m-auto text-center mt-2 border-gray-100 flex flex-col gap-2 p-2 drop-shadow-sm font-mont md:w-full lg:w-9/12 ">
              <h2 className="text-gray-600">Ukupan broj testova</h2>
              <h3 className="text-black text-xl  font-bold md:text-2xl">
                1245658
              </h3>
            </div>
            <div className="grid grid-cols-2 w-11/12 m-auto gap-3 md:w-full lg:w-9/12">
              <div className=" w-full border-2 m-auto text-center mt-2 border-gray-100 flex flex-col gap-2 p-2 drop-shadow-sm font-mont">
                {" "}
                <h2 className="text-gray-600 text-sm md:text-xl">
                  Ukupno potvrđenih
                </h2>
                <h3 className="text-black text-xl  font-bold text-red-400 md:text-2xl">
                  250132
                </h3>
              </div>
              <div className=" w-full border-2 m-auto text-center mt-2 border-gray-100 flex flex-col gap-2 p-2 drop-shadow-sm font-mont">
                {" "}
                <h2 className="text-gray-600 text-sm md:text-xl">
                  Ukupno izliječenih
                </h2>
                <h3 className="text-black text-xl  font-bold text-green-400 md:text-2xl">
                  229841
                </h3>
              </div>
              <div className=" w-full border-2 m-auto text-center mt-2 border-gray-100 flex flex-col gap-2 p-2 drop-shadow-sm font-mont">
                {" "}
                <h2 className="text-gray-600 text-sm md:text-xl">
                  Ukupno umrlih
                </h2>
                <h3 className="text-black text-xl  font-bold md:text-2xl">
                  8858
                </h3>
              </div>
              <div className="w-full border-2 m-auto text-center mt-2 border-gray-100 flex flex-col gap-2 p-2 drop-shadow-sm font-mont">
                {" "}
                <h2 className="text-gray-600 text-sm md:text-xl">
                  Ukupno aktivnih
                </h2>
                <h3 className="text-black text-xl  font-bold text-purple-400 md:text-2xl">
                  11433
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div className="sm:w-full  sm:m-auto lg:w-9/12">
              <Line data={doughData} />
            </div>
            {/* <h1 className="text-center pt-5 pb-5 font-mont">
              Smrtni slučajevi
            </h1>
            <div className="sm:w-full  sm:m-auto lg:w-9/12">
              <Line data={pieData} options={options} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
