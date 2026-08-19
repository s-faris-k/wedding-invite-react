import weddingConfig from '../weddingConfig'

export default function Footer() {
  const { groomName, brideName } = weddingConfig
  return (
    <div className="footer-note">
      Made with <span>♥</span> for Salman & marva's Nikkah
    </div>
  )
}
