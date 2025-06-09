import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeather = async (lat, lon, units = 'metric') => {
  const { data } = await axios.get(`${BASE_URL}/weather`, {
    params: {
      lat,
      lon,
      units,
      appid: API_KEY,
    },
  });
  return data;
};

export const getHourlyForecast = async (lat, lon, units = 'metric') => {
  const { data } = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      lat,
      lon,
      units,
      appid: API_KEY,
    },
  });
  
  return data;
};

const base_url = 'http://api.weatherapi.com/v1'

export const getDailyForecast = async (lat, lon) => {
  const { data } = await axios.get(`${base_url}/forecast.json`, {
    params: {
      key: "6c64ea03718d4ce7b3a172055250906",
      q: `${lat},${lon}`,
      days: 7
    },
  });
  
  return data;
};
