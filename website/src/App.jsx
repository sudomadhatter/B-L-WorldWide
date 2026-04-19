import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'

// Top Level Pages
import About from './pages/About'
import Team from './pages/Team'
import Contact from './pages/Contact'

// Technology
import Technology from './pages/divisions/Technology'
import Tender from './pages/divisions/technology/Tender'
import DigitalCurrencies from './pages/divisions/technology/DigitalCurrencies'
import Plice from './pages/divisions/technology/Plice'
import Splendor from './pages/divisions/technology/Splendor'

// Distribution
import Distribution from './pages/divisions/Distribution'
import Iltt from './pages/divisions/distribution/Iltt'
import Fresh24 from './pages/divisions/distribution/Fresh24'
import DutyFree from './pages/divisions/distribution/DutyFree'

// Aviation
import Aviation from './pages/divisions/Aviation'
import AirCargo from './pages/divisions/aviation/AirCargo'
import FlightTraining from './pages/divisions/aviation/FlightTraining'
import Atc from './pages/divisions/aviation/Atc'
import AvionicsMro from './pages/divisions/aviation/AvionicsMro'

// Infrastructure
import Infrastructure from './pages/divisions/Infrastructure'
import PortHotel from './pages/divisions/infrastructure/PortHotel'
import MixedUse from './pages/divisions/infrastructure/MixedUse'
import Housing from './pages/divisions/infrastructure/Housing'
import DeeLincoln from './pages/divisions/infrastructure/DeeLincoln'

// Productions
import Productions from './pages/divisions/Productions'
import Movies from './pages/divisions/productions/Movies'
import Documentaries from './pages/divisions/productions/Documentaries'
import Series from './pages/divisions/productions/Series'
import Commercials from './pages/divisions/productions/Commercials'

// Education
import Education from './pages/divisions/Education'
import GlobalPassportAcademy from './pages/divisions/education/GlobalPassportAcademy'
import AviationSim from './pages/divisions/education/AviationSim'
import AiPrograms from './pages/divisions/education/AiPrograms'
import FinanceEducation from './pages/divisions/education/Finance'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/technology" element={<Technology />} />
          <Route path="/technology/tender" element={<Tender />} />
          <Route path="/technology/digital-currencies" element={<DigitalCurrencies />} />
          <Route path="/technology/plice" element={<Plice />} />
          <Route path="/technology/splendor" element={<Splendor />} />

          <Route path="/distribution" element={<Distribution />} />
          <Route path="/distribution/iltt" element={<Iltt />} />
          <Route path="/distribution/24-fresh" element={<Fresh24 />} />
          <Route path="/distribution/duty-free" element={<DutyFree />} />

          <Route path="/aviation" element={<Aviation />} />
          <Route path="/aviation/air-cargo" element={<AirCargo />} />
          <Route path="/aviation/flight-training" element={<FlightTraining />} />
          <Route path="/aviation/atc" element={<Atc />} />
          <Route path="/aviation/mro" element={<AvionicsMro />} />

          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/infrastructure/port-hotel" element={<PortHotel />} />
          <Route path="/infrastructure/mixed-use" element={<MixedUse />} />
          <Route path="/infrastructure/housing" element={<Housing />} />
          <Route path="/infrastructure/dee-lincoln" element={<DeeLincoln />} />

          <Route path="/productions" element={<Productions />} />
          <Route path="/productions/movies" element={<Movies />} />
          <Route path="/productions/documentaries" element={<Documentaries />} />
          <Route path="/productions/series" element={<Series />} />
          <Route path="/productions/commercials" element={<Commercials />} />

          <Route path="/education" element={<Education />} />
          <Route path="/education/global-passport-academy" element={<GlobalPassportAcademy />} />
          <Route path="/education/aviation-sim" element={<AviationSim />} />
          <Route path="/education/ai-programs" element={<AiPrograms />} />
          <Route path="/education/finance" element={<FinanceEducation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
