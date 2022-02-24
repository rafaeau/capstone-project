import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './views/Login';
import Homepage from './views/Homepage';

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<Homepage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
