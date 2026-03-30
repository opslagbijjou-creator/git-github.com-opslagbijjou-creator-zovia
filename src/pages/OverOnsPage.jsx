import { NavLink } from "react-router-dom";
import PageTop from "../components/PageTop";

export default function OverOnsPage() {
  return (
    <>
      <PageTop
        kicker="Over ons"
        title="Menselijke zorg in een vertrouwde omgeving."
        description="We bouwen aan langdurige relaties met cliënten en families door rustig te luisteren en zorg echt af te stemmen op het dagelijks leven."
        actions={
          <>
            <NavLink className="btn btn-primary" to="/contact-zorg-aanvragen">
              Plan een kennismaking
            </NavLink>
            <NavLink className="btn btn-ghost" to="/zorgaanbod">
              Bekijk zorgaanbod
            </NavLink>
          </>
        }
      />

      <section className="hero container reveal">
        <div className="hero-copy">
          <p className="eyebrow">Over ons</p>
          <h1>Waar Zovia Thuiszorg voor staat</h1>
          <p>
            Zovia Thuiszorg is opgericht vanuit de overtuiging dat goede zorg begint met oprechte aandacht.
            Wij werken met een betrokken team dat cliënten ondersteunt op een manier die past bij hun situatie,
            cultuur en persoonlijke wensen.
          </p>
          <div className="hero-actions">
            <NavLink className="btn btn-primary" to="/contact-zorg-aanvragen">
              Neem contact op
            </NavLink>
            <NavLink className="btn btn-ghost" to="/zorgaanbod">
              Bekijk zorgaanbod
            </NavLink>
          </div>
        </div>
        <aside className="hero-card">
          <h2>Kernpunten</h2>
          <ul>
            <li>Persoonlijke aandacht voor elke cliënt</li>
            <li>Duidelijke communicatie met familie en verwijzers</li>
            <li>Betrouwbaar team met professionele zorgverleners</li>
          </ul>
        </aside>
      </section>

      <section className="container section reveal">
        <div className="grid-3">
          <article className="card">
            <h3>Onze missie</h3>
            <p>
              Wij bieden betrouwbare thuiszorg waarin persoonlijke aandacht en kwaliteit hand in hand gaan,
              zodat cliënten met vertrouwen thuis kunnen blijven wonen.
            </p>
          </article>
          <article className="card">
            <h3>Onze visie</h3>
            <p>
              Iedereen verdient waardige zorg in de vertrouwde thuissituatie, met zoveel mogelijk eigen regie
              over het dagelijks leven.
            </p>
          </article>
          <article className="card">
            <h3>Onze kernwaarden</h3>
            <p>
              Respect, betrokkenheid, deskundigheid en open communicatie met cliënt, mantelzorger en netwerk.
            </p>
          </article>
        </div>
      </section>

      <section className="container section reveal">
        <div className="section-head">
          <p className="eyebrow">Samenwerking</p>
          <h2>Met wie wij afstemmen</h2>
        </div>
        <div className="grid-2">
          <article className="card">
            <h3>Cliënt en familie</h3>
            <p>
              We nemen de tijd om goed te luisteren en maken afspraken die haalbaar en duidelijk zijn voor
              iedereen die betrokken is.
            </p>
          </article>
          <article className="card">
            <h3>Huisartsen en verwijzers</h3>
            <p>
              Waar nodig werken we nauw samen met medische en sociale partners, zodat de zorg goed op elkaar
              aansluit.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
