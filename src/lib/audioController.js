const AUDIO_SRC = '/bismillah-tere-naam-se-shuru-azaan-320-kbps_ClRhLQMM.mp3'

const audio = new Audio(AUDIO_SRC)
audio.loop = true
audio.preload = 'auto'

let isPlaying = false

const eventTarget = new EventTarget()

audio.addEventListener('play', () => {
  isPlaying = true
  eventTarget.dispatchEvent(new CustomEvent('change', { detail: { isPlaying } }))
})
audio.addEventListener('pause', () => {
  isPlaying = false
  eventTarget.dispatchEvent(new CustomEvent('change', { detail: { isPlaying } }))
})
audio.addEventListener('ended', () => {
  isPlaying = false
  eventTarget.dispatchEvent(new CustomEvent('change', { detail: { isPlaying } }))
})

export function play() {
  return audio.play().catch(() => {
    // play may be blocked by autoplay policies; still update state defensively
    isPlaying = false
    eventTarget.dispatchEvent(new CustomEvent('change', { detail: { isPlaying } }))
  })
}

export function pause() {
  audio.pause()
}

export function toggle() {
  if (isPlaying) pause()
  else play()
}

export function getIsPlaying() {
  return isPlaying
}

export function subscribe(fn) {
  const handler = (e) => fn(e.detail)
  eventTarget.addEventListener('change', handler)
  return () => eventTarget.removeEventListener('change', handler)
}

export default audio
