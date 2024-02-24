import React from 'react'

const Weather = ({WeatherData}) => 
 { console.log(WeatherData);
  return (
    <div>
    {WeatherData.weather ? (
        <div className= 'bg-gray-300 shadow-lg rounded-xl m-auto relative'>
            <h2 className='text-2xl'>Weather in {WeatherData.name}</h2>
            <p className='text-gray-500'>Temperature: {WeatherData.main.temp}°F</p>
            <p className='text-gray-500'>Description: {WeatherData.weather[0].description}</p>
            <p className='text-gray-500'>Humidity: {WeatherData.main.humidity}%</p>
            <p className='text-gray-500'>Wind Speed: {WeatherData.wind.speed} mph</p>
        </div>
                ): null }
    </div> 


    )
         
}

export default Weather;