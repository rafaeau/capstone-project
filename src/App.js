import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './views/Login';
import Homepage from './views/Homepage';
import Details from './views/Details';
import Favorites from './views/Favorites';
import AboutUs from './views/AboutUs';
import ContactUs from './views/ContactUs';

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/homepage' element={<Homepage />} />
            <Route exact path='/details' element={<Details />} />
            <Route exact path='/favorites' element={<Favorites />} />
            <Route exact path='/about-us' element={<AboutUs />} />
            <Route exact path='/contact-us' element={<ContactUs />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
