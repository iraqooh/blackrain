import './App.css'
import Navbar from './components/Navbar';
import CurrentWeather from './components/CurrentWeather'
import WeatherProperties from './components/WeatherProperties'
import Spinner from './components/Spinner'
// import useTemperatureUnit from './hooks/useTemperatureUnit'
import { useEffect, useState } from 'react';
import { getCurrentWeather, getHourlyForecast } from '@/services/weatherAPI';
import { useGeolocation } from '@/hooks/useGeolocation'

function App() {
    // const { unit } = useTemperatureUnit();
    // const [city, setCity] = useState('Kampala');
    const [dailyForecast, setDaily] = useState([]);
    const { coords, error } = useGeolocation();
    const [current, setCurrent] = useState(null);
    const [hourlyForecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const load = async () => {
        if (coords) {
          try {
            const currentData = await getCurrentWeather(coords.lat, coords.lon);
            const hourlyF = await getHourlyForecast(coords.lat, coords.lon);
            setCurrent(currentData);
            setForecast(hourlyF);
          } catch (err) {
            console.error('API error:', err);
          } finally {
            setLoading(false);
          }
        }
      }
      load()
    }, [coords])

    if (error) return <p className="text-red-500">{error}</p>;
    if (loading) return <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
              }}
            >
              <Spinner size="100" />
            </div>
    
    const currentHour = new Date().getHours()
    let dn = 'd'
    if (currentHour > 12) dn = 'n';

    const weatherNow = {
      location: `${current.name}, ${current.sys.country}`,
      temperature: Math.round(current.main.temp),
      description: current.weather[0].main,
      min: Math.round(current.main.temp_min),
      max: Math.round(current.main.temp_max),
      icon: `${current.weather[0].icon.substr(0,2)}${dn}`
    }
    

    const hourlyData = hourlyForecast.list.slice(0, 8).map(h => ({
      time: new Date(h.dt * 1000).toLocaleTimeString([], { hour: 'numeric' }),
      icon: `${h.weather[0].icon}`,
      temp: Math.round(h.main.temp),
    }));    

    const options = { hour: '2-digit', minute: '2-digit', seconds: '2-digit', hour12: true }

    const weatherMetrics = [
      { name: 'Humidity', value: `${current.main.humidity}%` },
      { name: 'Rain Chance', value: `${8}%` },
      { name: 'Feels Like', value: `${Math.round(current.main.feels_like)}°C` },
      { name: 'Wind', value: `${current.wind.speed} m/s` },
      { name: 'Visibility', value: `${current.visibility} m` },
      { name: 'Sunrise', value: `${new Date(current.sys.sunrise).toLocaleTimeString('en-GB', options)}` },
      { name: 'Sunset', value: `${new Date(current.sys.sunset).toLocaleTimeString('en-GB', options)}` },
    ]    

    return (
      <div className={`min-h-screen bg-cover bg-center text-white font-serif font-bold bg-blend-lighten bg-fixed`} style={{ backgroundImage: `url('/${weatherNow.description.toLowerCase()}${dn}.jpg')`}}>
        <Navbar isAuthenticated={true} weatherNow={weatherNow} />
          <main className="p-4 pt-20">
            {/* Weather sections */}
            <CurrentWeather
              weatherNow={weatherNow}
              hourlyForecast={hourlyData}
              dailyForecast={dailyForecast}
            />
            <WeatherProperties metrics={weatherMetrics} />
          </main>
      </div>
    );
}

export default App

