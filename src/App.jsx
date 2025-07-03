import Navbar from './components/ui/Navbar.component';
import Footer from './components/ui/Footer.component';
import HomePage from './pages/Home.page';
import { Routes, Route } from 'react-router-dom';
import FAQPage from './pages/FAQ.page';
import ContactUsPage from './pages/ContactUs.page';
import AboutUsPage from './pages/AboutUs.page';

function App() {
  return (
    <div>
      <Navbar/>

        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/faq" element={<FAQPage/>}/>
          <Route path="/contact-us" element={<ContactUsPage/>}/>
          <Route path="/about-us" element={<AboutUsPage/>}/>
        </Routes>


      <Footer/>

    </div>
  );
}

export default App;
