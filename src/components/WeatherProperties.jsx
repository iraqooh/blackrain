import React from 'react'
import {
  Droplet,
  CloudRain,
  Thermometer,
  Wind, Eye,
  Sun,
  Sunrise,
  Sunset,
} from 'lucide-react'

const iconMap = {
  Humidity: Droplet,
  'Rain Chance': CloudRain,
  'Feels Like': Thermometer,
  Wind: Wind,
  'Visibility': Eye,
  Sunrise: Sunrise,
  Sunset: Sunset,
}



export default function WeatherProperties({ metrics }) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
      {metrics.map((item, index) => {
        const IconComponent = iconMap[item.name] || Sun
        return (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 flex flex-col items-center justify-center shadow-md"
          >
            <IconComponent className="w-6 h-6 text-white mb-2" />
            <p className="text-sm text-gray-300">{item.name}</p>
            <p className="text-lg font-semibold">{item.value}</p>
          </div>
        )
      })}
    </section>
  )
}
