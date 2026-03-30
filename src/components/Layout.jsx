import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CONTACT_EMAIL, NAV_ITEMS, waLink } from "../siteConfig";

const removeOldPageClasses = () => {
  const classes = [...document.body.classList];
  classes.forEach((name) => {
    if (name.startsWith("page-")) {
      document.body.classList.remove(name);
    }
  });
};

const toPageClass = (pathname) => {
  if (pathname === "/") {
    return "page-index";
  }
  return `page-${pathname.replace(/^\//, "").replace(/[^a-z0-9-]/gi, "-")}`;
};

export default function Layout({ children }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const mobileWhatsApp = useMemo(
    () =>
      waLink("Hallo Zovia Thuiszorg, ik wil graag direct contact opnemen."),
    []
  );

  useEffect(() => {
    removeOldPageClasses();
    document.body.classList.add(toPageClass(location.pathname));
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;
      setScrollRatio(ratio);
      setIsScrolled(scrollTop > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const revealNodes = [...document.querySelectorAll(".reveal")];

    if (!("IntersectionObserver" in window)) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      <div className="site-bg" />
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollRatio})` }} />

      <a
        className="whatsapp-fab"
        href={waLink("Hallo Zovia Thuiszorg, ik wil graag meer informatie over thuiszorg.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Start WhatsApp gesprek met Zovia Thuiszorg"
      >
        WhatsApp
      </a>

      <header className={`header${isScrolled ? " is-scrolled" : ""}`}>
        <div className="topbar container">
          <p>Wij staan voor warme, veilige en professionele zorg aan huis.</p>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>

        <div className="nav-wrap container">
          <NavLink className="brand" to="/" aria-label="Ga naar Home">
            <img className="brand-logo" src="/assets/zovia-logo.png" alt="Logo Zovia Thuiszorg" />
            <span className="brand-fallback">
              Zovia
              <small>THUISZORG</small>
            </span>
          </NavLink>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((old) => !old)}
          >
            {menuOpen ? "Sluit" : "Menu"}
          </button>

          <nav className={`nav${menuOpen ? " is-open" : ""}`} aria-label="Hoofdmenu">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => {
                  const parts = [];
                  if (item.cta) parts.push("nav-cta");
                  if (isActive) parts.push("is-current");
                  return parts.join(" ");
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h3>Zovia Thuiszorg</h3>
            <p>Persoonlijke zorg met aandacht voor mens, welzijn en zelfstandigheid.</p>
          </div>
          <div>
            <h3>Pagina&apos;s</h3>
            <p><NavLink to="/over-ons">Over ons</NavLink></p>
            <p><NavLink to="/zorgaanbod">Zorgaanbod</NavLink></p>
            <p><NavLink to="/contact-zorg-aanvragen">Contact / Zorg aanvragen</NavLink></p>
          </div>
          <div>
            <h3>Contact</h3>
            <p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
            <p>
              <a href={waLink("Hallo Zovia Thuiszorg, ik wil graag contact.")} target="_blank" rel="noopener noreferrer">
                WhatsApp gesprek starten
              </a>
            </p>
          </div>
        </div>
        <p className="copyright">{new Date().getFullYear()} Zovia Thuiszorg. Alle rechten voorbehouden.</p>
      </footer>

      <div className="mobile-quickbar">
        <a href={`mailto:${CONTACT_EMAIL}`}>E-mail</a>
        <a className="mobile-quickbar__wa" href={mobileWhatsApp} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </div>
    </>
  );
}
