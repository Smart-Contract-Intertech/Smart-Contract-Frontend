import './pages/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Miras from './pages/Miras.js';
import MainPage from './pages/MainPage.js';
import Header from './Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <Router>
        <div className="App">
          <Header/>
          <Routes>
            <Route exact path='/' element={<MainPage/>}></Route>
            <Route exact path='/miras' element={<Miras/>}></Route>
          </Routes>
          <Footer/>
        </div>
    </Router>
  )
}

export default App;