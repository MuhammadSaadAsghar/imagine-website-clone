
import './App.css';
import Navbar from './Components/navbar section/Navbar';
import Hero from './Components/hero section/Hero';
import Features from './Components/Feature section/Features';
import Feedback from './Components/Feature section/Feedback';
// import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
  <>  
    <Navbar/>


    <Hero/> 
  <Features/>
  <Feedback/>
  


    {/* // <BrowserRouter>
    // <Routes>
    
    // <Route path="/Home" element={<Home />} />
    // </Routes>
    // </BrowserRouter> */}
</>
  );
}

export default App;
