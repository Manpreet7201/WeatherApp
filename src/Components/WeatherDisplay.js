// import React from 'react';

// function WeatherDisplay({ data }) {
//   return (
//     <div>
//       <h2>{data.name}</h2>
//       <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p> {/* Convert from Kelvin to Celsius */}
//       <p>Weather: {data.weather[0].description}</p>
//     </div>
//   );
// }

// export default WeatherDisplay;




import React from 'react';

function WeatherDisplay({ data }) {
  return (
    <div className='bg-white mt-6 p-4 rounded-lg shadow-md w-96 text-center'>
      <h2 className='text-xl font-bold mb-2 text-green-800'>{data.name}</h2>
      <p className='text-lg'>Temperature: {Math.round(data.main.temp)}°C</p> {/* No need to subtract 273.15 */}
      <p className="text-sm text-gray-700">Weather: {data.weather[0].description}</p>
    </div>
  );
}

export default WeatherDisplay;


// import React from 'react';

// function WeatherDisplay({ data }) {
//   const { name, main, weather, sys } = data;

//   return (
//     <div className="weather-display bg-white p-8 rounded-lg shadow-md">
//       <h2 className="text-3xl font-bold mb-4">{name}, {sys.country}</h2>

//       <p className="text-2xl">
//         {weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1)}
//       </p>

//       <p className="text-4xl font-semibold">
//         {Math.round(main.temp)}°C
//       </p>

//       <div className="mt-4">
//         <p>Feels like: {Math.round(main.feels_like)}°C</p>
//         <p>Humidity: {main.humidity}%</p>
//         <p>Pressure: {main.pressure} hPa</p>
//       </div>
//     </div>
//   );
// }

// export default WeatherDisplay;


// import React, { useContext } from 'react';
// import { WeatherContext } from '../contexts/weatherContext';

// function WeatherDisplay() {
//   const { weather } = useContext(WeatherContext);

//   if (!weather) return null; // Avoid rendering if no weather data

//   const { name, main, weather: weatherDetails, sys } = weather;

//   return (
//     <div className="weather-display bg-white p-8 rounded-lg shadow-md">
//       <h2 className="text-3xl font-bold mb-4">
//         {name}, {sys.country}
//       </h2>
//       <p className="text-2xl">
//         {weatherDetails[0].description.charAt(0).toUpperCase() +
//           weatherDetails[0].description.slice(1)}
//       </p>

//       <p className="text-4xl font-semibold">
//         {Math.round(main.temp)}°C
//       </p>

//       <div className="mt-4">
//         <p>Feels like: {Math.round(main.feels_like)}°C</p>
//         <p>Humidity: {main.humidity}%</p>
//         <p>Pressure: {main.pressure} hPa</p>
//       </div>
//     </div>
//   );
// }

// export default WeatherDisplay;


