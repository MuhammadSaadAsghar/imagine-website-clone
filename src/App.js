
import './App.css';
import Navbar from './Components/navbar section/Navbar';
import Hero from './Components/hero section/Hero';
import Features from './Components/Feature section/Features';
import Feedback from './Components/Feature section/Feedback';
import About from './Components/About us/About';
import Team from './Components/Our team/Team';
import Reviews from './Components/Testimonails/Reviews';
import Blog from './Components/Blogs/Blog';


function App() {
  return (
  <>  
    <Navbar/>
    <Hero/> 
  <Features/>
  <Feedback/>
  <About/>
  <Team/>
  <Reviews/>
  <Blog/>
  


   </>
  );
}

export default App;
