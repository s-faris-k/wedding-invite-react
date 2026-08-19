import weddingConfig from '../weddingConfig'

function downloadIcs() {
  const { groomName, brideName, eventDateTime, venue, invitationCopy } = weddingConfig

  const toIcsDate = (iso) => iso.replace(/[-:]/g, '').split('.')[0]
  const start = toIcsDate(eventDateTime)
  const endDate = new Date(new Date(eventDateTime).getTime() + 3 * 60 * 60 * 1000)
  const end = toIcsDate(endDate.toISOString())

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `SUMMARY:${groomName} & ${brideName}'s Wedding`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `LOCATION:${venue.name}, ${venue.address}`,
    `DESCRIPTION:${invitationCopy}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\n')

  const blob = new Blob([ics], { type: 'text/calendar' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = 'wedding-invite.ics'
  link.click()
  URL.revokeObjectURL(link.href)
}

export default function SaveTheDate({ id }) {
  const { eventDateDisplay, venue } = weddingConfig

  return (
    <section className="section save-date" id={id}>
      <div className="eyebrow">Save the Date</div>
      <div className="date-big">{eventDateDisplay}</div>
      <div className="place">
        {venue.name}, {venue.address.split('·')[0]}
      </div>
      <button className="btn" onClick={downloadIcs}>
        📅 Add to Calendar
      </button>
    </section>
  )
}
