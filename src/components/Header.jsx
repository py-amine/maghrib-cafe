function Header() {
  return (
    <header className="topbar" id="top">
      <nav className="topbar-nav" aria-label="Main navigation">
        <div className="nav-left">
          <a href="#menu">Menu</a>
          <a href="#pour">What we pour</a>
        </div>
        <a className="mini-logo" href="#top" aria-label="MAGHRIB home">
          <b>MAGHRIB</b>
          <i>Coffee · Tea · Kitchen</i>
        </a>
        <div className="nav-right">
          <a href="#story">Story</a>
          <a href="#visit">Visit</a>
        </div>
      </nav>

      <div className="mobile-topbar">
        <a href="#top">MAGHRIB</a>
        <a href="#menu">Menu</a>
        <a href="#visit">Visit</a>
      </div>

      <div className="topbar-meta">
        <span>Guéliz · Marrakech</span>
        <span>Daily 08:00—22:30</span>
      </div>
    </header>
  );
}

export default Header;
