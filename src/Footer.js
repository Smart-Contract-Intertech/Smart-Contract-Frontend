import Logo from './pages/image/Logo.png'

export default function Footer(){
    return(
        <nav className="navbar bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                <img src={Logo} alt="" width="30" height="30" className="d-inline-block align-text-top" style={{display:"inline"}}></img>
                <p style={{display:"inline", color:'white'}}>MOIRA</p>
                </a>
            </div>
        </nav>
    )
}