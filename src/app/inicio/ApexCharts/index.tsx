'use client'

import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { AsteroidsType, Datatype } from "../types";

const options = {
  xaxis: {
    categories: ["kilometers_per_second","kilometers_per_hour","miles_per_hour"]
  },
  yaxis: {
      title:{
          text: 'Distance'
      }
  },
  chart: {
      type: 'bar',
      height: 350
  },
  plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        endingShape: 'rounded'
      },
  },
  dataLabels: {
      enabled: false
  },
  stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
  },
  fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val:number) {
          return val + " km/h"
        }
      }
  }
};

export default function ApexChart({ data }:AsteroidsType[]){
  const [dataAsteroids, setDataAsteroids] = useState< AsteroidsType[] >([]);

  useEffect(() =>{
    normalizeData(data)
  },[data])
  
  function normalizeData( value : AsteroidsType[] ){
    var newDataAsteroids = []

    for( let i = 0; i <= 5; i++){
      const objectToArray = Object.entries(value[i].close_approach_data[0].relative_velocity).map(([chave, valor]) => valor);

      newDataAsteroids.push({name: value[i].name, data:[...objectToArray]})
    }

    setDataAsteroids(newDataAsteroids)
  }


  return ( 
        <div className="bg-white w-[800px] h-full">
            <Chart options={options} series={dataAsteroids} type="bar"  width={800} height={400} />
        </div>
        )
};

