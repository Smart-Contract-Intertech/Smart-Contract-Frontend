import './pages/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './pages/Profile.js';
import MainPage from './pages/MainPage.js';
import Heritage from './pages/Heritage';
import Header from './Header';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
        <Router>
            <Routes>
              <Route exact path='/' element={<MainPage/>}></Route>
              <Route exact path='/profile' element={<Profile/>}></Route>
              <Route exact path='/heritage' element={<Heritage/>}></Route>
            </Routes>
        </Router>
      <Footer/>
    </div>
  )
}

export default App;