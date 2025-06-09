export default function HourlyForecast({ forecast }) {
  
  return (
    <div className="overflow-x-auto whitespace-nowrap py-2 px-1 space-x-4 flex">
      {forecast.map((hour, index) => {
        return (
          <div
            key={index}
            className="flex-shrink-0 text-center bg-white/10 rounded-xl px-4 py-2"
          >
            <p className="text-sm">{hour.time}</p>
              <img src={`https://openweathermap.org/img/wn/${hour.icon}@2x.png`} alt="" className='inline w-15'/>
            <p className="text-lg">{hour.temp}°</p>
          </div>
        )
      })}
    </div>
  )
}
