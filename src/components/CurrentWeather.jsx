import React from 'react'
import HourlyForecast from './HourlyForecast'
import DailyForecast from './DailyForecast'

export default function CurrentWeather({ weatherNow, hourlyForecast, dailyForecast }) {
  return (
    <section className="space-y-6">
      {/* Location & Now */}
      <div className="flex justify-center rounded-2">
        <div className="text-center backdrop-blur-sm w-80 p-5 rounded-2xl">
          <h2 className="text-2xl font-semibold">{weatherNow.location}</h2>
          <p className="text-6xl font-bold">{weatherNow.temperature}°C</p>
          <p className="text-xl">{weatherNow.description} <img src={`https://openweathermap.org/img/wn/${weatherNow.icon}@2x.png`} alt="" className='inline w-15'/></p>
          <p className="text-sm text-gray-300">
            Min: {weatherNow.min}°C | Max: {weatherNow.max}°C
          </p>
        </div>
      </div>

      {/* Hourly Forecast */}
      <HourlyForecast forecast={hourlyForecast} />

      {/* Daily Forecast */}
      <DailyForecast forecast={dailyForecast} />
    </section>
  )
}
