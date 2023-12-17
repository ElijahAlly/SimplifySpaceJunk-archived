const Navbar = ({ handleNavLinkClick }) => {

    return (
        <nav className="navbar">
            <div className="logo-container">
                <img
                    src='/images/SimplifySpaceJunkLogo.png'
                    className="logo"
                />
                <h1 className="title">SimplifySpaceJunk</h1>
            </div>
            <ul className="main-nav" id="js-menu">
                <li>
                    <h3 id="welcome-link" className="nav-links" onClick={ () => handleNavLinkClick('Welcome')}>Welcome</h3>
                </li>
                <li>
                    <h3 id="about-link" className="nav-links" onClick={ () => handleNavLinkClick('About')}>About</h3>
                </li>
                <li>
                    <h3 id="solutions-link" className="nav-links" onClick={ () => handleNavLinkClick('Solutions')}>Solutions</h3>
                </li>
                <li>
                    <h3 id="contact-link" className="nav-links" onClick={ () => handleNavLinkClick('Contact')}> Contact Me </h3>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;