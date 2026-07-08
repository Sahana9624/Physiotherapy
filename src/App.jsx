import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Components/Home";
import Header from "./Components/Header";
import About from "./Components/About";
import Academics from "./Components/Academics";
import Facilities from "./Components/Facilities";
import Contact from "./Components/Contact";
import News from "./Components/News";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import PrivacyPolicy from "./Components/Privacypolicy";
import TermsAndConditions from "./Components/Termsandconditions";
import ReturnRefundPolicy from "./Components/Returnrefundpolicy";
import CancellationPolicy from "./Components/Cancellationpolicy";
import CourseDescription from "./Components/Coursedescription";
import AdmissionsModal from "./Components/AdmissionsModal";
import NewsDetail from "./Components/NewsDetail";
import GalleryDetail from "./Components/GalleryDetail";

function App() {
  const [isAdmissionsModalOpen, setAdmissionsModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <ScrollToTop />
      <Header />
      <div 
        className="global-admissions-tab" 
        aria-hidden="true"
        onClick={() => setAdmissionsModalOpen(true)}
      >
        <span className="global-admissions-tab-text">Admissions open <span className="admission-year">2026-2027</span></span>
      </div>
      <AdmissionsModal 
        isOpen={isAdmissionsModalOpen} 
        onClose={() => setAdmissionsModalOpen(false)} 
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/News" element={<News />} />
        <Route path="/news/:slug" element={<NewsDetail />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/gallery/:slug" element={<GalleryDetail />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/return-refund-policy" element={<ReturnRefundPolicy />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        <Route path="/course-description" element={<CourseDescription />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;