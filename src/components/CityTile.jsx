import { X } from 'lucide-react'

function CityTile({ removable=false, removeLogic=null, weatherData }) {
  const currentHour = new Date().getHours()
  let dn = 'd'
  if (currentHour > 12) dn = 'n';

  return (
    <div
        className="relative flex justify-between items-center rounded-lg px-4 py-3 mb-4 bg-cover bg-center overflow-hidden bg-slate-500 bg-blend-overlay"
        style={{
        backgroundImage: `url('/${weatherData.description}${dn}.jpg')`,
        backgroundBlendMode: 'overlay'
        }}
    >
        {/* Remove button */}
        {removable ?
                <button
                  onClick={removeLogic}
                  className="absolute top-2 right-2 text-white/80 hover:text-red-400 bg-black/40 rounded-full p-1"
                  title="Remove City"
                >
                  <X className="w-4 h-4" />
                </button> : null}

        {/* Left: Name & Description */}
        <div className="bg-black/50 p-2 rounded-md">
        <h3 className="font-semibold">{weatherData.location}</h3>
        <p className="text-xs">{weatherData.description}</p>
        </div>

        {/* Right: Temp & Range */}
        <div className="flex flex-col items-end bg-black/20 p-2 rounded-md text-right">
        <p className="text-lg">{weatherData.temperature}°C</p>
        <p className="text-xs">
            {weatherData.min}° / {weatherData.max}°
        </p>
        </div>
    </div>
  )
}

export default CityTile