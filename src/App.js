import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './views/Login';
import Homepage from './views/Homepage';
import Details from './views/Details';
import Favorites from './views/Favorites';

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/details' element={<Details />} />
            <Route exact path='/favorites' element={<Favorites />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
