import weddingConfig from '../weddingConfig'

function telHref(phone) {
  return `tel:${phone.replace(/\s+/g, '')}`
}

export default function Enquiry() {
  const contacts = weddingConfig.contacts || {}
  const primary = contacts.primary
  const secondary = contacts.secondary || []

  if (!primary) return null

  return (
    <section className="section">
      <div className="heading-sm">For Enquiry</div>

      <div className="contact-main">
        <div>
          <div className="contact-name">{primary.name}</div>
          {primary.role && <div className="contact-role">{primary.role}</div>}
          <div className="contact-phone">{primary.phone}</div>
        </div>
        <a className="call-btn" href={telHref(primary.phone)} aria-label="Call">
          📞
        </a>
      </div>

      {secondary.length > 0 && (
        <div className="contact-row">
          {secondary.map((c) => (
            <div className="contact-card" key={c.name}>
              <div className="contact-name">{c.name}</div>
              {c.role && <div className="contact-role">{c.role}</div>}
              <div className="contact-phone">{c.phone}</div>
              <a className="call-btn outline" href={telHref(c.phone)} aria-label="Call">
                📞
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
