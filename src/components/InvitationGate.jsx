import { useState } from 'react'
import { play } from '../lib/audioController'

export default function InvitationGate({ onOpen }) {
  const [closing, setClosing] = useState(false)

  const handleOpen = async () => {
    // User interaction -> browser allows audio playback
    await play()

    setClosing(true)

    // Let the fade-out animation finish
    setTimeout(() => {
      onOpen()
    }, 800)
  }

  if (!closing) {
    return (
      <div className="invitation-gate">
        <div className="gate-content">
          <div className="gate-bismillah">
            بسم الله الرحمن الرحيم
          </div>

          <div className="gate-subtitle">
            Together with their families
          </div>

          <div className="gate-names">
            Salman
            <span>&</span>
            Bride
          </div>

          <button
            className="gate-button"
            onClick={handleOpen}
          >
            Open Invitation
          </button>

          <div className="gate-hint">
            Tap to open
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="invitation-gate closing">
      <div className="gate-content">
        <div className="gate-names">
          Salman <span>&</span> Bride
        </div>
      </div>
    </div>
  )
}