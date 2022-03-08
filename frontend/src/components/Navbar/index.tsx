import {ReactComponent as GithubIcon} from '../../assets/img/github-5.svg';
import './styles.css'
function Navbar() {
    return (
    <header>
    <nav className="container">
        <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/JuniorBI" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-container">
                    <GithubIcon />
                    <p className="dsmovie-contact-link">/juniorBI</p>
                </div>
            </a>
        </div>
    </nav>
</header>
    )
}

export default Navbar;