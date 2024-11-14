import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WeatherContext = createContext();

const API_KEY = '3eb088267a8f2e3e783e06e8a2941461';

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState('New York');
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeather(response.data);
        setError('');
      } catch (err) {
        setError('City not found');
        setWeather(null);
      }
      setIsLoading(false);
    };
    fetchWeather();
  }, [city]);

  return (
    <WeatherContext.Provider value={{ city, setCity, weather, isLoading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};
