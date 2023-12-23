

import { useEffect } from 'react'
import ApexChart from "./ApexCharts";
import { Datatype } from './types';
import Header from '@/components/Header';


export default async function Inicio(){

  async function getData(){
    const response = await fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=RarFb0q2HvVvAL41hDKoJ3t9KfKx3tiQglp4yi5O')
    const data:Datatype = await response.json();


    return data.near_earth_objects['2015-09-07']
  }

 const asteroidsData = await getData()
  

  return (
    <div className='bg-sky-500 h-screen' >
      <Header/>
      <hr className=" relative mb-20 ml-auto mr-auto border top-2 w-full" />
      <div className=' flex flex-col items-center gap-6 text-center m-auto max-w-full' >
        <h1 className='text-white text-4xl' >DASHBOARD</h1>
        <hr className=" relative mb-20 ml-auto mr-auto border top-2 w-80" />
        <ApexChart data={asteroidsData} />
      </div>
    </div>

  )
}