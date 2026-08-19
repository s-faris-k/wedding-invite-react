import weddingConfig from '../weddingConfig'

export default function Venue() {
  const { venue, eventTimeDisplay, eventDateDisplay } = weddingConfig

  return (
    <section className="section">
      <div className="heading-sm">Venue</div>
      <div className="venue-card">
        <div className="venue-icon">📍</div>
        <div>
          <div className="venue-name">{venue.name}</div>
          <div className="venue-address">{venue.address}</div>
        </div>
      </div>
      <div className="venue-time">
        🕐 {eventTimeDisplay} · {eventDateDisplay}
      </div>
      <a className="btn" href={venue.mapsUrl} target="_blank" rel="noreferrer">
        🧭 Get Directions
      </a>
    </section>
  )
}
