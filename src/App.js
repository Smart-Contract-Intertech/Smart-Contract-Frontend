import './pages/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from './pages/MainPage.js';
import Header from './Header';
import TransferInputScreen from './pages/TransferInputScreen';

import {  
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <Header/>
          <Routes>
            <Route exact path='/' element={<MainPage/>}></Route>
            <Route exact path='/TransferInputScreen' element={<TransferInputScreen/>}></Route>
          </Routes>
        </div>
    </Router>
  )
}

export default App;