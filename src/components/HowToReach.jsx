import { useState } from 'react'
import weddingConfig from '../weddingConfig'

export default function HowToReach() {
  const [openIndex, setOpenIndex] = useState(null)
  const routes = weddingConfig.howToReach || []

  if (routes.length === 0) return null

  return (
    <section className="section">
      <div className="heading-sm">How to Reach</div>

      {routes.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div className={`accordion-item${isOpen ? ' open' : ''}`} key={item.title}>
            <div
              className="accordion-head"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setOpenIndex(isOpen ? null : i)}
            >
              <div className="accordion-icon">{item.icon}</div>
              <div className="accordion-title">{item.title}</div>
              <div className="accordion-chevron">▾</div>
            </div>
            <div className="accordion-body">
              <p>{item.body}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}
