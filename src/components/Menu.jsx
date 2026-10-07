import menu from "../data/menu";

function MenuGroup({ group, number }) {
  return (
    <article className={`menu-group menu-group-${number + 1}`}>
      <header>
        <span>{String(number + 1).padStart(2, "0")}</span>
        <h3>{group.category}</h3>
        {group.note && <em>{group.note}</em>}
      </header>

      <ul>
        {group.items.map((item) => (
          <li key={item.name}>
            <div>
              <strong>{item.name}</strong>
              {item.detail && <small>{item.detail}</small>}
            </div>
            <span className="dot-line" aria-hidden="true" />
            <b>{item.price}</b>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Menu() {
  return (
    <section className="menu-section" id="menu" aria-labelledby="menu-title">
      <div className="menu-intro">
        <p className="section-index">01 / Eat &amp; drink</p>
        <h2 id="menu-title">MENU</h2>
        <div className="menu-note">
          <b>Breakfast served until 12:00.</b>
          <span>All prices in MAD.</span>
        </div>
      </div>

      <div className="menu-grid">
        {menu.map((group, index) => (
          <MenuGroup key={group.category} group={group} number={index} />
        ))}
      </div>

      <p className="menu-bottom-note">
        Oat milk +6 · Ask us about allergens · The pastry shelf changes during the week
      </p>
    </section>
  );
}

export default Menu;
