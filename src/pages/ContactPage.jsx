import PageTop from "../components/PageTop";
import { CONTACT_EMAIL, waLink } from "../siteConfig";

export default function ContactPage() {
  return (
    <>
      <PageTop
        kicker="Direct contact"
        title="Neem contact op of meld direct zorg aan."
        description="Gebruik het contactformulier of het aanmeldformulier. Je kunt ook direct mailen of via WhatsApp contact opnemen."
        actions={
          <>
            <a className="btn btn-primary" href={`mailto:${CONTACT_EMAIL}`}>
              Mail direct
            </a>
            <a
              className="btn btn-ghost"
              href={waLink("Hallo Zovia Thuiszorg, ik wil graag direct contact over een zorgvraag.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start WhatsApp
            </a>
          </>
        }
      />

      <section className="hero container reveal">
        <div className="hero-copy">
          <p className="eyebrow">Contact / Zorg aanvragen</p>
          <h1>Wij denken direct met je mee</h1>
          <p>
            Laat je vraag achter via het contactformulier of meld zorg aan via het aanmeldformulier.
            We reageren zo snel mogelijk met een duidelijke terugkoppeling.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            <a
              className="btn btn-ghost"
              href={waLink("Hallo Zovia Thuiszorg, ik wil graag een zorgaanvraag bespreken.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Direct via WhatsApp
            </a>
          </div>
        </div>
        <aside className="hero-card">
          <h2>Bereikbaarheid</h2>
          <ul>
            <li>E-mail: {CONTACT_EMAIL}</li>
            <li>Contactformulier voor vragen</li>
            <li>Aanmeldformulier voor zorgaanvragen</li>
          </ul>
        </aside>
      </section>

      <section className="container section contact reveal">
        <div className="contact-grid">
          <article className="card contact-card">
            <h3>Direct bereikbaar</h3>
            <p>
              E-mail: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
            <p>WhatsApp: gebruik de groene knop voor direct contact met ons team.</p>
            <small>Controleer in `src/siteConfig.js` of het WhatsApp-nummer klopt.</small>
          </article>

          <form className="card form" action={`https://formsubmit.co/${CONTACT_EMAIL}`} method="POST">
            <h3>Contactformulier</h3>
            <p className="form-intro">Voor vragen, informatie of een terugbelverzoek.</p>

            <input type="hidden" name="_subject" value="Nieuw contactbericht via Zovia website" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden-field" tabIndex="-1" autoComplete="off" />

            <label htmlFor="contact-name">Naam</label>
            <input id="contact-name" name="naam" type="text" required />

            <label htmlFor="contact-email">E-mailadres</label>
            <input id="contact-email" name="email" type="email" required />

            <label htmlFor="contact-phone">Telefoonnummer</label>
            <input id="contact-phone" name="telefoon" type="tel" />

            <label htmlFor="contact-message">Bericht</label>
            <textarea id="contact-message" name="bericht" rows="4" required />

            <button className="btn btn-primary" type="submit">
              Verstuur bericht
            </button>
          </form>

          <form className="card form" action={`https://formsubmit.co/${CONTACT_EMAIL}`} method="POST">
            <h3>Aanmeldformulier zorg</h3>
            <p className="form-intro">Voor clienten, familie, mantelzorgers en verwijzers.</p>

            <input type="hidden" name="_subject" value="Nieuwe zorgaanvraag via Zovia website" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden-field" tabIndex="-1" autoComplete="off" />

            <label htmlFor="request-role">U bent</label>
            <select id="request-role" name="rol" required>
              <option value="">Maak een keuze</option>
              <option value="client">Client</option>
              <option value="mantelzorger">Mantelzorger</option>
              <option value="familielid">Familielid</option>
              <option value="verwijzer">Verwijzer</option>
            </select>

            <label htmlFor="request-name">Naam client</label>
            <input id="request-name" name="client_naam" type="text" required />

            <label htmlFor="request-postcode">Postcode</label>
            <input id="request-postcode" name="postcode" type="text" required />

            <label htmlFor="request-phone">Telefoonnummer</label>
            <input id="request-phone" name="telefoon" type="tel" required />

            <label htmlFor="request-email">E-mailadres</label>
            <input id="request-email" name="email" type="email" required />

            <label htmlFor="request-care">Gewenste zorg</label>
            <textarea id="request-care" name="zorgvraag" rows="4" required />

            <label htmlFor="request-start">Gewenste startdatum</label>
            <input id="request-start" name="startdatum" type="date" />

            <label className="checkbox" htmlFor="request-consent">
              <input id="request-consent" type="checkbox" name="toestemming" required />
              Ik geef toestemming om mijn gegevens te verwerken voor contact over deze aanvraag.
            </label>

            <button className="btn btn-primary" type="submit">
              Verstuur zorgaanvraag
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
