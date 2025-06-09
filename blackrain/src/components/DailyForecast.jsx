export default function DailyForecast({ forecast }) {
  return (
    <div className="grid gap-2">
      {forecast.map((day, index) => {
        return (
          <div
            key={index}
            className="flex justify-between items-center bg-white/10 rounded-lg px-4 py-2"
          >
            <div>
              <p className="font-medium">{day.day}</p>
              <p className="text-xs text-gray-300">{day.date}</p>
            </div>
            {/* <Icon className="w-6 h-6 text-white" /> */}
            <div className="text-sm">
              <span className="text-white">{day.max}°</span> /{' '}
              <span className="text-gray-300">{day.min}°</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
