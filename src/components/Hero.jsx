import { useCountdown, pad } from '../hooks/useCountdown'
import { useEffect, useState } from 'react'
import weddingConfig from '../weddingConfig'
import SlideButton from './SlideButton'
import { toggle, getIsPlaying, subscribe } from '../lib/audioController'

const PETALS = [
  { emoji: '🌸', left: '10%', delay: '0s' },
  { emoji: '🕊️', left: '75%', delay: '2s' },
  { emoji: '❤', left: '40%', delay: '4s' },
  { emoji: '🌸', left: '60%', delay: '1s' },
  { emoji: '❤', left: '20%', delay: '5.5s' },
]

export default function Hero({ onAttendClick }) {
  const { groomName, brideName, headline, invitationCopy, eventDateTime, eventDateDisplay, venue } =
    weddingConfig
  const { days, hours, minutes, seconds } = useCountdown(eventDateTime)

  return (
    <section className="hero" id="hero">
      {PETALS.map((p, i) => (
        <div
          key={i}
          className="petal"
          style={{ left: p.left, animationDelay: p.delay }}
        >
          {p.emoji}
        </div>
      ))}

      <AudioPill />
      <div style={{ clear: 'both' }} />

      <div className="bismillah">بسم الله الرحمن الرحيم</div>

      <h1 className="headline">
        {headline.split(' ').slice(0, 2).join(' ')}
        <br />
        {headline.split(' ').slice(2).join(' ')}
      </h1>

      <p className="invite-copy">{invitationCopy}</p>

      <div className="names">{groomName}</div>
      <div className="wed-tag">weds</div>
      <div className="names">{brideName}</div>

      <div className="divider-dot" />

      <div className="countdown">
        <div className="unit">
          <span className="num">{pad(days)}</span>
          <span className="label">Days</span>
        </div>
        <div className="unit">
          <span className="num">{pad(hours)}</span>
          <span className="label">Hours</span>
        </div>
        <div className="unit">
          <span className="num">{pad(minutes)}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="unit">
          <span className="num">{pad(seconds)}</span>
          <span className="label">Seconds</span>
        </div>
      </div>

      <div className="hero-meta">
        <strong>{eventDateDisplay}</strong>
        <br />
        {venue.name}, {venue.address.split('·')[0]}
      </div>

      <div className="attend-row">
        <SlideButton onComplete={onAttendClick} />
      </div>

      <div className="arch" />
    </section>
  )
}

function AudioPill() {
  const [isPlaying, setIsPlaying] = useState(getIsPlaying())

  useEffect(() => {
    const unsub = subscribe(({ isPlaying }) => setIsPlaying(!!isPlaying))
    return unsub
  }, [])

  return (
    <button
      className="audio-pill"
      onClick={() => toggle()}
      aria-pressed={isPlaying}
      aria-label="Toggle audio playback"
    >
      <span className={`dot ${isPlaying ? 'playing' : ''}`} /> Nikkah Nasheed ♪
    </button>
  )
}

