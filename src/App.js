
import './App.css';
import Header from './Components/Header.jsx';
import Navbar from './Components/Navbar.jsx';
import Middle from './Components/Middle.jsx';
import EducationalProgramsMenu from './Components/EducationMenu.jsx';
import SchoolAuraMobileApp from './Components/SchoolAuraMobileApp.jsx';
import SchoolAuraBenefits from './Components/Student.jsx';
import OnlineEducationBenefits from './Components/OnlineEducationBenefits.jsx';
import EducationBanner from './Components/EducationBanner.jsx';
import CampusTourSection from './Components/CampusTourSection.jsx';
import ParentTestimonialsSlider from './Components/ParentTestimonialsSlider.jsx';
import WebsiteFooter from './Components/WebsiteFooter.jsx';

function App() {
  return (
    <>
   <Navbar/>
   <Header/>
   <Middle/>
   <EducationalProgramsMenu/>
   <SchoolAuraBenefits/>
   <SchoolAuraMobileApp/>
   <OnlineEducationBenefits/>
   <br/>
   <br/>
   <EducationBanner/>
   <br/>
   <br/>
   <br/>
   <CampusTourSection/>
   <ParentTestimonialsSlider/>
   <br/>
   <br/>
   <br/>
   <WebsiteFooter/>
    </>
  );
}

export default App;
