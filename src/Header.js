import logo from './pages/image/Logo.png';
import icon1 from './pages/image/wallet.png';
import icon2 from './pages/image/profile.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header(){
  return(
    <Navbar fixed="top" bg="dark" variant="dark" className='shadow'>
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="Anasayfa"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          MOIRA
        </Navbar.Brand>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Navbar.Brand href="/profile">
            <img
              href="./pages/Profile.js"
              src={icon2}
              alt="Profile"
              width="30"
              height="30"
            />{'Profil'}
          </Navbar.Brand>
          <Navbar.Brand href="/heritage">
            <img
              href="./pages/Heritage.js"
              src={icon1}
              alt="Wallet"
              width="30"
              height="30"
            />{'Cüzdan'}
          </Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  )
}