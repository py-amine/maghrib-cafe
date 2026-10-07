function WhatWePour() {
  return (
    <section className="pour-section" id="pour" aria-labelledby="pour-title">
      <div className="pour-topline">
        <span>02 / Behind the cup</span>
        <span>Marrakech, Morocco</span>
      </div>

      <div className="pour-title-block">
        <h2 id="pour-title">
          WHAT
          <br />
          WE POUR
        </h2>
        <p>
          Three things we care about.
          <br />
          No secret language required.
        </p>
      </div>

      <div className="pour-layout">
        <figure className="pour-image-main">
          <img src="./images/coffee.webp" alt="Fresh espresso being prepared" />
          <figcaption>Medium roast · balanced and sweet</figcaption>
        </figure>

        <div className="pour-copy">
          <article>
            <span>01</span>
            <h3>Coffee</h3>
            <p>A medium-roasted Arabica blend with chocolate, caramel and dried-fruit notes.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Tea</h3>
            <p>Moroccan green tea with fresh mint, alongside black, jasmine and herbal selections.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Matcha</h3>
            <p>Ceremonial-grade matcha whisked to order and served hot or iced.</p>
          </article>
        </div>

        <figure className="pour-image-small">
          <img src="./images/tea.jpg" alt="Mint tea poured into a clear glass" />
          <figcaption>Poured high, taken slowly.</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default WhatWePour;
