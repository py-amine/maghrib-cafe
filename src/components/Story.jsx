function Story() {
  return (
    <section className="story-section" id="story" aria-labelledby="story-title">
      <div className="story-label">
        <span>03 / Our story</span>
        <span>Born in Guéliz</span>
      </div>

      <h2 id="story-title">
        <span>MOROCCAN HABITS.</span>
        <span>MODERN RHYTHM.</span>
      </h2>

      <div className="story-bottom">
        <figure>
          <img src="./images/interior.jpg" alt="The contemporary MAGHRIB café interior" />
        </figure>
        <p>
          MAGHRIB is a contemporary café shaped by familiar rituals: morning coffee, mint tea,
          shared plates and conversations that last longer than planned. Rooted in Marrakech and
          made for the way the city moves now.
        </p>
        <span className="story-mark">مغرب</span>
      </div>
    </section>
  );
}

export default Story;
