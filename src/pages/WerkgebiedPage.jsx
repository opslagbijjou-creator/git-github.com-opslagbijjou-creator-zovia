import { NavLink } from "react-router-dom";
import PageTop from "../components/PageTop";
import { waLink } from "../siteConfig";

const municipalities = [
  "Rotterdam",
  "Schiedam",
  "Vlaardingen",
  "Capelle aan den IJssel",
  "Barendrecht",
  "Ridderkerk"
];

export default function WerkgebiedPage() {
  return (
    <>
      <PageTop
        kicker="Regionale thuiszorg"
        title="Snel duidelijkheid of wij bij u kunnen starten."
        description="Wij werken met regionale teams. Daardoor kunnen we snel reageren op nieuwe aanvragen en direct afstemmen over beschikbaarheid."
        actions={
          <>
            <NavLink className="btn btn-primary" to="/contact-zorg-aanvragen">
              Doe direct een postcodecheck
            </NavLink>
            <a
              className="btn btn-ghost"
              href={waLink("Hallo Zovia Thuiszorg, kunt u checken of jullie in mijn regio zorg bieden?")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Check via WhatsApp
            </a>
          </>
        }
      />

      <section className="hero container reveal">
        <div className="hero-copy">
          <p className="eyebrow">Werkgebied</p>
          <h1>Zorg dichtbij huis met korte lijnen</h1>
          <p>
            Binnen ons werkgebied plannen wij intake en opstart zo snel mogelijk in.
            Bij nieuwe aanvragen kijken we eerst naar postcode, zorgvraag en gewenste startdatum.
          </p>
          <div className="hero-actions">
            <NavLink className="btn btn-primary" to="/contact-zorg-aanvragen">
              Contact / Zorg aanvragen
            </NavLink>
            <NavLink className="btn btn-ghost" to="/zorgaanbod">
              Bekijk zorgaanbod
            </NavLink>
          </div>
        </div>
        <aside className="hero-card">
          <h2>Snelle terugkoppeling</h2>
          <ul>
            <li>Binnen korte tijd reactie op uw aanvraag</li>
            <li>Duidelijke uitleg over mogelijke start</li>
            <li>Direct contact met ons team</li>
          </ul>
        </aside>
      </section>

      <section className="container section reveal">
        <div className="section-head">
          <p className="eyebrow">Actieve regio</p>
          <h2>Gemeenten waar wij vaak zorg leveren</h2>
        </div>
        <div className="grid-3">
          {municipalities.map((city) => (
            <article key={city} className="card">
              <h3>{city}</h3>
              <p>
                Staat uw woonplaats hier niet tussen? Neem alsnog contact op, dan doen wij direct een check.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section reveal">
        <div className="card area">
          <h3>Twijfelt u of uw adres binnen ons werkgebied valt?</h3>
          <p>
            Stuur uw postcode via het formulier of via WhatsApp. Wij laten u snel weten
            wat de mogelijkheden zijn.
          </p>
          <div className="hero-actions">
            <NavLink className="btn btn-primary" to="/contact-zorg-aanvragen">
              Start postcodecheck
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
