import './pages/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './pages/Profile.js';
import MainPage from './pages/MainPage.js';
import Heritage from './pages/Heritage';
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
            <Route exact path='/profile' element={<Profile/>}></Route>
            <Route exact path='/heritage' element={<Heritage/>}></Route>
          </Routes>
          <Footer/>
        </div>
    </Router>
  )
}

export default App;