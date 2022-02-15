import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import Tapestry from './components/Tapestry';

function App() {
  return (
    <>
      <div className="app">
        <MyNavbar />
        <div className="main">
          <Tapestry/>
        </div>
        <MyFooter />
      </div>
    </>
  );
}

export default App;
