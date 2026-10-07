function Visit() {
  return (
    <section className="visit-section" id="visit" aria-labelledby="visit-title">
      <div className="visit-head">
        <span>05 / Come by</span>
        <h2 id="visit-title">
          VISIT
          <br />
          MAGHRIB
        </h2>
        <p className="script">See you soon</p>
      </div>

      <div className="visit-details">
        <article>
          <span>Find us</span>
          <h3>
            18 Rue des Orangers
            <br />
            Guéliz, Marrakech
          </h3>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Gueliz%20Marrakech"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps ↗
          </a>
        </article>

        <article>
          <span>Hours</span>
          <h3>
            Every day
            <br />
            08:00—22:30
          </h3>
          <p>Breakfast until 12:00</p>
        </article>

        <article>
          <span>Talk to us</span>
          <h3>
            <a href="https://wa.me/212652413921" target="_blank" rel="noreferrer">
              +212 6 52 41 39 21
            </a>
            <br />
            <a
              href="https://instagram.com/maghrib.marrakech"
              target="_blank"
              rel="noreferrer"
            >
              @maghrib.marrakech
            </a>
          </h3>
          <p>Walk-ins welcome</p>
        </article>
      </div>
    </section>
  );
}

export default Visit;
