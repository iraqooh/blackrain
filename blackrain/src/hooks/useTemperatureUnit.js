// src/hooks/useTemperatureUnit.js
import { useEffect, useState } from 'react'

export default function useTemperatureUnit() {
  const [unit, setUnit] = useState(() => {
    return localStorage.getItem('temperatureUnit') || 'C'
  })

  useEffect(() => {
    localStorage.setItem('temperatureUnit', unit)
  }, [unit])

  return { unit, setUnit }
}

// import useTemperatureUnit from '@/hooks/useTemperatureUnit'

// const { unit } = useTemperatureUnit()
// const displayTemp = unit === 'F' ? convertToF(celsiusTemp) : celsiusTemp

// function convertToF(celsius) {
//   return Math.round((celsius * 9) / 5 + 32)
// }
