import Hero from './components/Hero'
import SaveTheDate from './components/SaveTheDate'
import Venue from './components/Venue'
import Enquiry from './components/Enquiry'
import HowToReach from './components/HowToReach'
import PhotoGallery from './components/PhotoGallery'
import Downloads from './components/Downloads'
import Footer from './components/Footer'

export default function App() {
  const scrollToSaveTheDate = () => {
    document.getElementById('save-date')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="invite">
      <Hero onAttendClick={scrollToSaveTheDate} />
      <SaveTheDate id="save-date" />
      <Venue />
      <Enquiry />
      <HowToReach />
      {/* <PhotoGallery /> */}
      <Downloads />
      <Footer />
    </div>
  )
}
