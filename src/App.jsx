import { Routes, Route, useNavigate } from 'react-router-dom'
import Hero from './components/Hero'
import SaveTheDate from './components/SaveTheDate'
import Venue from './components/Venue'
import Enquiry from './components/Enquiry'
import HowToReach from './components/HowToReach'
import PhotoGallery from './components/PhotoGallery'
import Downloads from './components/Downloads'
import Footer from './components/Footer'

function Invite() {
  const navigate = useNavigate()
  const goToSaveDate = () => navigate('/save-date')

  return (
    <div className="invite">
      <Hero onAttendClick={goToSaveDate} />
    
      <Footer />
    </div>
  )
}

function SavePage() {
  return (
    <div className="invite">
      <SaveTheDate />
       <Venue />
      <Enquiry />
      <HowToReach />
      {/* <PhotoGallery /> */}
      <Downloads />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Invite />} />
      <Route path="/save-date" element={<SavePage />} />
    </Routes>
  )
}
