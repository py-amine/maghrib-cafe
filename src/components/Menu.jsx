import { useEffect, useState } from "react";
import fallbackMenu from "../data/menu";

const ODOO_API_URL =
  import.meta.env.VITE_ODOO_API_URL || "/api/v1/menu";

function mapOdooToMenu(data) {
  return data.map((cat) => ({
    category: cat.name,
    note: cat.service_hours || undefined,
    items: (cat.items || []).map((item) => ({
      name: item.name,
      detail: item.description || undefined,
      price: item.price_mad,
      isAvailable: item.is_available !== false,
    })),
  }));
}

function MenuGroup({ group, number }) {
  return (
    <article className={`menu-group menu-group-${number + 1}`}>
      <header>
        <span>{String(number + 1).padStart(2, "0")}</span>
        <h3>{group.category}</h3>
        {group.note && <em>{group.note}</em>}
      </header>

      <ul>
        {group.items.map((item) => {
          const soldOut = item.isAvailable === false;
          return (
            <li key={item.name} className={soldOut ? "is-sold-out" : undefined}>
              <div>
                <strong>
                  {item.name}
                  {soldOut && <span className="sold-out-badge">Épuisé</span>}
                </strong>
                {item.detail && <small>{item.detail}</small>}
              </div>
              <span className="dot-line" aria-hidden="true" />
              <b>{item.price}</b>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

function Menu() {
  const [menuData, setMenuData] = useState(fallbackMenu);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch(ODOO_API_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((payload) => {
        if (payload?.status === "success" && Array.isArray(payload.data)) {
          setMenuData(mapOdooToMenu(payload.data));
          setIsLive(true);
        }
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setIsLive(false);
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <section className="menu-section" id="menu" aria-labelledby="menu-title">
      <div className="menu-intro">
        <p className="section-index">01 / Eat & drink</p>
        <h2 id="menu-title">MENU</h2>
        <div className="menu-note">
          <b>Breakfast served until 12:00.</b>
          <span>
            All prices in MAD{isLive ? " · Live stock synced" : "."}
          </span>
        </div>
      </div>

      <div className="menu-grid">
        {menuData.map((group, index) => (
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