function Gallery() {
  return (
    <section className="gallery-section" aria-labelledby="gallery-title">
      <div className="gallery-head">
        <span>04 / Around the table</span>
        <h2 id="gallery-title">
          A FEW THINGS
          <br />
          FROM THIS WEEK.
        </h2>
      </div>

      <div className="gallery-grid">
        <figure className="gallery-a">
          <img src="./images/breakfast.jpg" alt="Breakfast spread with coffee" />
          <figcaption>Breakfast, before 12.</figcaption>
        </figure>
        <figure className="gallery-b">
          <img src="./images/matcha.webp" alt="Iced matcha in the sun" />
          <figcaption>Green on blue.</figcaption>
        </figure>
        <figure className="gallery-c">
          <img src="./images/food.webp" alt="A light plate from the MAGHRIB kitchen" />
          <figcaption>Lunch, kept simple.</figcaption>
        </figure>
        <figure className="gallery-d">
          <img src="./images/interior.jpg" alt="Tables inside MAGHRIB" />
          <figcaption>A corner in Guéliz.</figcaption>
        </figure>
        <figure className="gallery-e">
          <img src="./images/tea.jpg" alt="Fresh Moroccan tea" />
          <figcaption>Always mint.</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Gallery;
