import { NavLink } from "react-router-dom";
import PageTop from "../components/PageTop";
import { CONTACT_EMAIL, waLink } from "../siteConfig";

export default function HomePage() {
  return (
    <>
      <PageTop
        kicker="Nieuwe generatie thuiszorg"
        title="Zorg met warmte, vertrouwen en moderne ondersteuning."
        description="Bij Zovia combineren we persoonlijke aandacht met heldere communicatie, zodat cliënten en families precies weten waar ze aan toe zijn."
        actions={
          <>
            <NavLink className="btn btn-primary" to="/contact-zorg-aanvragen">
              Direct zorg aanvragen
            </NavLink>
            <a
              className="btn btn-ghost"
              href={waLink("Hallo Zovia Thuiszorg, ik wil graag een zorgvraag bespreken.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Stel je vraag via WhatsApp
            </a>
          </>
        }
      />

      <section className="container photo-ribbon reveal" aria-label="Sfeerbeelden van zorg">
        <figure className="photo-card">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1400&q=80"
            alt="Zorgverlener in gesprek met client aan huis"
            loading="eager"
          />
        </figure>
        <figure className="photo-card">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80"
            alt="Professionele thuiszorg met persoonlijke aandacht"
            loading="lazy"
          />
        </figure>
        <figure className="photo-card">
          <img
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1400&q=80"
            alt="Ondersteuning bij dagelijkse zorg in huis"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="hero container reveal">
        <div className="hero-copy">
          <p className="eyebrow">Welkom bij Zovia Thuiszorg</p>
          <h1>Betrokken thuiszorg die echt past bij uw leven.</h1>
          <p>
            Bij Zovia staat de mens centraal. We bieden ondersteuning met respect, rust en aandacht,
            zodat u zo zelfstandig en comfortabel mogelijk thuis kunt blijven wonen.
          </p>
          <div className="hero-actions">
            <NavLink className="btn btn-primary" to="/contact-zorg-aanvragen">
              Direct zorg aanvragen
            </NavLink>
            <a
              className="btn btn-ghost"
              href={waLink("Hallo Zovia Thuiszorg, ik wil graag contact over thuiszorg.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Direct via WhatsApp
            </a>
          </div>
        </div>
        <aside className="hero-card">
          <h2>Snelle contactopties</h2>
          <ul>
            <li>
              <strong>E-mail:</strong> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li><strong>WhatsApp:</strong> directe doorverbinding via de knop rechts</li>
            <li><strong>Zorg aanvragen:</strong> via het aanmeldformulier op de contactpagina</li>
          </ul>
        </aside>
      </section>

      <section className="container section reveal">
        <div className="section-head">
          <p className="eyebrow">Onze organisatie</p>
          <h2>Persoonlijke zorg, vertrouwd dichtbij</h2>
        </div>
        <div className="grid-3">
          <article className="card">
            <h3>Mensgericht</h3>
            <p>We luisteren naar uw wensen en stemmen de zorg af op uw dagelijks leven en gewoonten.</p>
          </article>
          <article className="card">
            <h3>Deskundig</h3>
            <p>Ons team werkt professioneel en met aandacht voor veiligheid, comfort en kwaliteit.</p>
          </article>
          <article className="card">
            <h3>Toegankelijk</h3>
            <p>Via e-mail, formulier of WhatsApp zijn we snel bereikbaar voor vragen of een aanvraag.</p>
          </article>
        </div>
      </section>

      <section className="container section reveal">
        <div className="section-head">
          <p className="eyebrow">Snel naar</p>
          <h2>Bekijk alle pagina&apos;s</h2>
        </div>
        <div className="grid-2">
          <NavLink className="card card-link" to="/over-ons">
            <h3>Over ons</h3>
            <p>Lees meer over onze missie, visie en kernwaarden.</p>
          </NavLink>
          <NavLink className="card card-link" to="/zorgaanbod">
            <h3>Zorgaanbod</h3>
            <p>Ontdek welke zorg en ondersteuning wij leveren.</p>
          </NavLink>
          <NavLink className="card card-link" to="/werkwijze">
            <h3>Werkwijze</h3>
            <p>Bekijk onze stappen van intake tot evaluatie.</p>
          </NavLink>
          <NavLink className="card card-link" to="/werkgebied">
            <h3>Werkgebied</h3>
            <p>Controleer of wij zorg kunnen bieden op uw adres.</p>
          </NavLink>
          <NavLink className="card card-link" to="/werken-bij-ons">
            <h3>Werken bij ons</h3>
            <p>Sluit je aan bij ons team in de thuiszorg.</p>
          </NavLink>
          <NavLink className="card card-link" to="/contact-zorg-aanvragen">
            <h3>Contact / Zorg aanvragen</h3>
            <p>Neem direct contact op of dien uw aanvraag in.</p>
          </NavLink>
        </div>
      </section>
    </>
  );
}
