import PageTop from "../components/PageTop";
import { CONTACT_EMAIL, waLink } from "../siteConfig";

export default function WerkenBijOnsPage() {
  return (
    <>
      <PageTop
        kicker="Kom ons team versterken"
        title="Werk in de thuiszorg met aandacht, vertrouwen en groeiruimte."
        description="Bij Zovia werk je in een betrokken team met korte lijnen, duidelijke planning en oprechte aandacht voor client en collega."
        actions={
          <>
            <a
              className="btn btn-primary"
              href={`mailto:${CONTACT_EMAIL}?subject=Sollicitatie%20bij%20Zovia%20Thuiszorg`}
            >
              Solliciteer direct via e-mail
            </a>
            <a
              className="btn btn-ghost"
              href={waLink("Hallo Zovia Thuiszorg, ik heb interesse om bij jullie te werken.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Stel je vraag via WhatsApp
            </a>
          </>
        }
      />

      <section className="container photo-ribbon reveal" aria-label="Sfeerbeelden van werken bij Zovia">
        <figure className="photo-card">
          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1400&q=80"
            alt="Zorgmedewerkers in een warme werkomgeving"
            loading="eager"
          />
        </figure>
        <figure className="photo-card">
          <img
            src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1400&q=80"
            alt="Samenwerking en aandacht in het zorgteam"
            loading="lazy"
          />
        </figure>
        <figure className="photo-card">
          <img
            src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1400&q=80"
            alt="Professionele thuiszorg in de praktijk"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="container section reveal">
        <div className="grid-3">
          <article className="card">
            <h3>Kleine teams</h3>
            <p>Je werkt in een overzichtelijke organisatie waar je collega&apos;s echt kent.</p>
          </article>
          <article className="card">
            <h3>Ruimte om te groeien</h3>
            <p>Wij stimuleren ontwikkeling met begeleiding, feedback en praktijkgerichte samenwerking.</p>
          </article>
          <article className="card">
            <h3>Mensgerichte cultuur</h3>
            <p>Bij ons staan respect, betrouwbaarheid en heldere communicatie centraal.</p>
          </article>
        </div>
      </section>

      <section className="container section reveal">
        <form className="card form" action={`https://formsubmit.co/${CONTACT_EMAIL}`} method="POST">
          <h3>Open sollicitatie</h3>
          <p className="form-intro">Laat je gegevens achter. Wij nemen snel contact met je op.</p>

          <input type="hidden" name="_subject" value="Nieuwe sollicitatie via Zovia website" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" className="hidden-field" tabIndex="-1" autoComplete="off" />

          <label htmlFor="job-name">Naam</label>
          <input id="job-name" name="naam" type="text" required />

          <label htmlFor="job-email">E-mailadres</label>
          <input id="job-email" name="email" type="email" required />

          <label htmlFor="job-phone">Telefoonnummer</label>
          <input id="job-phone" name="telefoon" type="tel" required />

          <label htmlFor="job-role">Functie of ervaring</label>
          <input id="job-role" name="functie" type="text" required />

          <label htmlFor="job-message">Motivatie</label>
          <textarea id="job-message" name="motivatie" rows="5" required />

          <button className="btn btn-primary" type="submit">
            Verstuur sollicitatie
          </button>
        </form>
      </section>
    </>
  );
}
