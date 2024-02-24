import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
function App() {


  const [data, setdata] = useState("")
  const [location, setlocation] = useState("")

  const API_KEY = "d46e17e9378b150bd372256b7b710dff";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchLocation = (event) => { 
    if(event.key === 'Enter') {
      axios.get(url)
      .then((response) => {
        setdata(response.data)
      })
      console.log(data)
      setlocation('')
    }

  }
  return (
    <div className='w-full h-full relative'>
      <div className='w-full h-16 bg-blue-500 flex justify-center items-center'>
        <h1 className='text-white text-2xl'>Weather Forecast</h1>
      </div>
      <div className='text-center p-4'>
        <h2 className='text-2xl'>Location</h2>
        <p className='text-gray-500'>Enter a city to get the weather forecast</p>
        <input type='text' className='border-2 border-gray-300 p-2 rounded-lg w-1/2' 
               placeholder='Please Enter City Name ...' value={location} onChange={(event) => setlocation(event.target.value)}
               onKeyDown={searchLocation}/>
      </div>

      <Weather WeatherData={data} />
    </div>
  )
}

export default App
