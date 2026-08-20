import { useEffect, useState } from 'react'
import audio, { play, subscribe, getIsPlaying } from '../lib/audioController'

export default function AudioPlayer() {
  const [playing, setPlaying] = useState(getIsPlaying())

  useEffect(() => {
    const unsub = subscribe(({ isPlaying }) => setPlaying(!!isPlaying))
    // try to autoplay on mount (may be blocked by browser)
    play()
    return unsub
  }, [])

  return (
    <div aria-hidden="true" style={{ display: 'none' }}>
      {/* keep a reference to the audio element for debugging if needed */}
      <audio src={audio.src} loop />
    </div>
  )
}
