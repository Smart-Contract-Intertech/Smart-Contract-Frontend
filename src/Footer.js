import Logo from './pages/image/Logo.png'

export default function Footer(){
    return(
        <nav class="navbar bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                <img src={Logo} alt="" width="30" height="30" class="d-inline-block align-text-top" style={{display:"inline"}}></img>
                <p style={{display:"inline", color:'white'}}>MOIRA</p>
                </a>
            </div>
        </nav>
    )
}