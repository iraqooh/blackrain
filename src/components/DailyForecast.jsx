export default function DailyForecast({ forecast }) {
  return (
    <div className="grid gap-2">
      {forecast.map((day, index) => {
        return (
          <div
            key={index}
            className="flex justify-between items-center bg-white/10 rounded-lg px-4 py-2"
          >
            <div className="flex space-x-4">
              <p className="text-xs text-gray-300">{new Date(day.date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' })}</p>
              <p className="font-medium">{new Date(day.date).toLocaleString('en-US', { weekday: 'short' })}</p>
            </div>

            {/* Icon */}
            <div className="">
              <img src={day.day.condition.icon} alt="" />
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
