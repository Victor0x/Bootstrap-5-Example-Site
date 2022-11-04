import logo from './logo.svg';
import './App.css';
import "./css/main.css";
import NavbarComp from './Components/NavbarComp';
import FooterComp from './Components/FooterComp';
import HeroComp from './Components/HeroComp';
import ServicesComp from './Components/ServicesComp';
import GalleryComp from './Components/GalleryComp';
import JurusanComp from './Components/JurusanComp';
import ContactComp from './Components/ContactComp';
function App() {
  return (
   <div>
    {/* content */}
    <HeroComp />
    <NavbarComp/>
    <GalleryComp/>
    <JurusanComp/>
    <ServicesComp/>
    <ContactComp/>   
    {/* end content */}
    <FooterComp/>
   </div>
  );
}

export default App;
