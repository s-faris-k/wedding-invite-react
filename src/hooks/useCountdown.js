import { useEffect, useState } from 'react'

/**
 * Returns a live-updating { days, hours, minutes, seconds } countdown
 * to the given target date. Updates once per second.
 */
export function useCountdown(targetDate) {
  const target = typeof targetDate === 'string' ? new Date(targetDate) : targetDate

  const calculate = () => {
    const diff = Math.max(0, target - new Date())
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  const [time, setTime] = useState(calculate)

  useEffect(() => {
    const id = setInterval(() => setTime(calculate()), 1000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate])

  return time
}

export const pad = (n) => String(n).padStart(2, '0')
