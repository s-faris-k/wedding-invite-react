import weddingConfig from '../weddingConfig'

export default function Downloads() {
  const downloads = weddingConfig.downloads || []

  if (downloads.length === 0) return null

  return (
    <section className="section">
      <div className="heading-sm">Downloads</div>
      <div className="downloads-row">
        {downloads.map((d) => (
          <div className="download-card" key={d.label}>
            <div className="download-thumb">{d.icon}</div>
            <p>{d.label}</p>
            <a className="btn" href={d.href}>
              {d.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
