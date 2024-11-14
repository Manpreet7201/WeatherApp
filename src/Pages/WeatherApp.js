import React, { useState, useEffect } from 'react';
import Search from '../Components/Search';
import WeatherDisplay from '../Components/WeatherDisplay';
import axios from 'axios';

const API_KEY = '3eb088267a8f2e3e783e06e8a2941461'; 

function WeatherApp() {
  const [city, setCity] = useState('New York'); 
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     setIsLoading(true); 
  //     try {
  //       const response = await axios.get(
  //         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  //       );
  //       console.log(response.data);

  //       setWeather(response.data); 
  //       setError('');
  //     } catch (err) {
  //       setError('Error fetching weather data'); 
  //     }
  //     setIsLoading(false); 
  //   };

  //   fetchWeather();
  // }, [city]); 

  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true); 
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
  
        if (response.status === 200) { // 200 means a successful response
          setWeather(response.data); 
          setError(''); // Clear any previous error if successful
        } else {
          setError('City not found'); // Handle cases where the status is not 200
          setWeather(null); // Clear any previous valid weather data
        }
  
      } catch (err) {
        // Check if the error is due to a bad response, like 404 for city not found
        if (err.response && err.response.status === 404) {
          setError('City not found');
        } else {
          setError('Error fetching weather data');
        }
        setWeather(null); // Clear any previous valid weather data in case of error
      }
      setIsLoading(false); 
    };
  
    fetchWeather();
  }, [city]);

  
  

  const handleSearch = (newCity) => setCity(newCity); 

  return (
    <div className='container mx-auto p-8 bg-blue-100 min-h-screen flex flex-col items-center justify-center'>
     <h1 className="text-4xl font-bold text-gray-800 mb-8">Weather App</h1>
      <Search onSearch={handleSearch} /> 
      {isLoading ? (
        <p className='text-lg text-gray-600 mt-6'>Loading...</p>
      ) : weather ? (
        <WeatherDisplay data={weather} /> 
      ) : (
        <p className="text-2xl text-red-600 mt-6">{error}</p> 
      )}
    </div>
  );
}

export default WeatherApp;




// import { useContext } from 'react';
// import { WeatherContext } from '../contexts/weatherContext';
// import Search from '../Components/Search';
// import WeatherDisplay from '../Components/WeatherDisplay';

// function WeatherApp() {
//   const { city, weather, isLoading, error, setCity } = useContext(WeatherContext);

//   const handleSearch = (newCity) => setCity(newCity);

//   return (
//     <div>
//     <h1 className="text-4xl font-bold text-gray-800 mb-8">Weather in {city}</h1> {/* Display city */}
//       <Search onSearch={handleSearch} />
//       {isLoading ? <p>Loading...</p> : weather ? <WeatherDisplay /> : <p>{error}</p>}
//     </div>
//   );
// }

// export default WeatherApp;
