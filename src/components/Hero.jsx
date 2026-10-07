function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-stamp">
        <span>31.63° N</span>
        <span>08.00 → 22.30</span>
      </div>

      <div className="hero-title">
        <h1 id="hero-title">MAGHRIB</h1>
        <span className="script">Coffee · Tea · Kitchen</span>
      </div>

      <div className="hero-photos">
        <figure className="hero-coffee">
          <img src="./images/coffee.webp" alt="Espresso poured over a blue café counter" />
          <figcaption>01 · Coffee</figcaption>
        </figure>
        <figure className="hero-tea">
          <img src="./images/tea.jpg" alt="Moroccan mint tea in the Marrakech light" />
          <figcaption>02 · Tea</figcaption>
        </figure>
        <figure className="hero-matcha">
          <img src="./images/matcha.webp" alt="Iced matcha against cobalt blue" />
          <figcaption>03 · Matcha</figcaption>
        </figure>
        <figure className="hero-breakfast">
          <img src="./images/breakfast.jpg" alt="Breakfast plates at MAGHRIB" />
          <figcaption>04 · Until noon</figcaption>
        </figure>
      </div>

      <div className="hero-foot">
        <p>
          Coffee, tea and easy mornings
          <br />
          in Marrakech.
        </p>
        <a className="arrow-link" href="#menu">
          <span>Menu</span>
          <b>↓</b>
        </a>
      </div>
    </section>
  );
}

export default Hero;
