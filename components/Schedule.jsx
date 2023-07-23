"use client"
import { useState, useEffect } from "react"

const Schedule = () => {
  const [deviceTime, setDeviceTime] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDeviceTime(new Date().toLocaleString())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <p>Now: {deviceTime}</p>
    </div>
  )
}

export default Schedule
