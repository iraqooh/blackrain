import React, { useState, useEffect, useRef } from 'react'
import { Plus, Search, X } from 'lucide-react'
import CityTile from './CityTile'

// Dummy cities database
const CITY_DATABASE = [
  { location: 'Kampala', description: 'Cloudy', icon: 'cloudy', temp: 26, min: 21, max: 28 },
  { location: 'Nairobi', description: 'Snow', icon: 'snow', temp: 25, min: 20, max: 27 },
  { location: 'Johannesburg', description: 'Rain', icon: 'rain', temp: 18, min: 15, max: 20 },
]

export default function CityManagerModal({ isOpen, weatherNow, onClose }) {
  const [showSearch, setShowSearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [favorites, setFavorites] = useState([])

  const modalRef = useRef(null)

  const filteredCities = CITY_DATABASE.filter(city =>
    city.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const addCity = (city) => {
    if (!favorites.find(c => c.location === city.location)) {
      setFavorites([...favorites, city])
    }
    setSearchTerm('')
    setShowSearch(false)
  }

  const removeCity = (location) => {
    setFavorites(favorites.filter(c => c.location !== location))
  }

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEsc)
  }, [onClose])

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div onClick={handleOverlayClick} className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
      <div ref={modalRef} className="bg-gray-900 text-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">City Manager</h2>
          <div className="flex items-center gap-2">
            <button onClick={() => setShowSearch(!showSearch)} className="hover:text-gray-300">
              <Plus />
            </button>
            <button onClick={onClose} className="hover:text-gray-300">
              <X />
            </button>
          </div>
        </div>

        {/* Search Field */}
        {showSearch && (
          <div className="mb-4">
            <div className="flex items-center bg-white/10 rounded px-3 py-2">
              <Search className="w-4 h-4 mr-2 text-gray-300" />
              <input
                type="text"
                placeholder="Search city..."
                className="bg-transparent outline-none w-full placeholder-gray-400 text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {searchTerm && (
              <div className="mt-2 max-h-48 overflow-y-auto space-y-2">
                {filteredCities.map(city => (
                  <div
                    key={city.location}
                    className="flex justify-between items-center bg-white/5 hover:bg-white/10 rounded px-3 py-2 cursor-pointer"
                    onClick={() => addCity(city)}
                  >
                    <span>{city.location}</span>
                    <span className="text-sm text-gray-300">{city.description}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Current city */}
        <CityTile weatherData={weatherNow} />
        <CityTile removable={true} removeLogic={removeCity} weatherData={CITY_DATABASE[1]} />
        <CityTile removable={true} removeLogic={removeCity} weatherData={CITY_DATABASE[2]} />

        {/* Favorites List */}
        <div className="space-y-4">
          {favorites.map(city => {
            return (
              <div
                key={city.location}
                className="relative flex justify-between items-center rounded-lg px-4 py-3 bg-cover bg-center overflow-hidden bg-slate-500 bg-blend-overlay"
                style={{
                  backgroundImage: `url('/${'clear-sky'}.jpg')`,
                  backgroundBlendMode: 'overlay'
                }}
              >
                {/* Remove button */}
                <button
                  onClick={() => removeCity(city.location)}
                  className="absolute top-2 right-2 text-white/80 hover:text-red-400 bg-black/40 rounded-full p-1"
                  title="Remove City"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Left: Name & Description */}
                <div className="bg-black/50 p-2 rounded-md">
                  <h3 className="font-semibold">{city.location}</h3>
                  <p className="text-xs">{city.description}</p>
                </div>

                {/* Right: Temp & Range */}
                <div className="flex flex-col items-end bg-black/20 p-2 rounded-md text-right">
                  <p className="text-lg">{city.temp}°</p>
                  <p className="text-xs">
                    {city.min}° / {city.max}°
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
