export default function PhotoGallery() {
  return (
    <section className="section">
      <div className="heading-sm">Photo Gallery</div>

      <div className="gallery-banner">
        <div className="scan-icon">🙂</div>
        <div className="txt">
          <span className="cs">Coming soon</span>
        </div>
      </div>

      <div className="gallery-title">
        Your face,
        <br />
        your memories
      </div>
      <p className="gallery-desc">
        Take a quick selfie after the wedding and our smart gallery will find every photo you
        appear in — delivered straight to your phone, no searching needed.
      </p>
      <button className="btn btn-outline" disabled>
        📷 Get My Photos
      </button>
    </section>
  )
}
