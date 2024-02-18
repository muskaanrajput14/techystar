// normal imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Exercises from "./Components/Exercises";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Services from "./Components/Services";


// styling imports
import "./Style/App.scss"
import "./Style/Colors.scss"
import "./Style/Header.scss"
import "./Style/Home.scss"
import "./Style/Footer.scss"
import "./Style/Contact.scss"
import "./Style/mediaquery.scss"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/exercises" element={<Exercises/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        <Route path = "/services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
