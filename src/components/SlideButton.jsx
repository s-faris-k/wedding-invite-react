import { useRef, useState, useEffect } from 'react'

export default function SlideButton({ onComplete, label = 'Yeah, I am attending' }) {
  const trackRef = useRef(null)
  const knobRef = useRef(null)
  const startXRef = useRef(0)
  const startTranslateRef = useRef(0)
  const [translate, setTranslate] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    function onPointerMove(e) {
      if (!dragging) return
      const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX)
      if (clientX == null) return
      const dx = clientX - startXRef.current
      const track = trackRef.current
      const knob = knobRef.current
      if (!track || !knob) return
      const max = track.clientWidth - knob.clientWidth - 4
      let next = Math.max(0, Math.min(max, startTranslateRef.current + dx))
      setTranslate(next)
    }

    function onPointerUp() {
      if (!dragging) return
      setDragging(false)
      const track = trackRef.current
      const knob = knobRef.current
      if (!track || !knob) return
      const max = track.clientWidth - knob.clientWidth - 4
      const pct = translate / max
      const threshold = 0.78
      if (pct >= threshold) {
        // complete
        setTranslate(max)
        setCompleted(true)
        setTimeout(() => onComplete && onComplete(), 220)
      } else {
        // snap back
        setTranslate(0)
      }
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    window.addEventListener('touchmove', onPointerMove, { passive: false })
    window.addEventListener('touchend', onPointerUp)
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('touchmove', onPointerMove)
      window.removeEventListener('touchend', onPointerUp)
    }
  }, [dragging, translate, onComplete])

  function startDrag(e) {
    const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX)
    if (clientX == null) return
    setDragging(true)
    startXRef.current = clientX
    startTranslateRef.current = translate
  }

  return (
    <div className="slide-row">
      <div className="slide-track" ref={trackRef} aria-hidden={completed}>
        <div
          className={`slide-knob ${dragging ? 'dragging' : ''} ${completed ? 'done' : ''}`}
          ref={knobRef}
          style={{ transform: `translateX(${translate}px)` }}
          onPointerDown={startDrag}
          onTouchStart={startDrag}
          role="button"
          tabIndex={0}
          aria-label={label}
        >
          ›
        </div>
        <div className="slide-label">{label}</div>
      </div>
    </div>
  )
}
