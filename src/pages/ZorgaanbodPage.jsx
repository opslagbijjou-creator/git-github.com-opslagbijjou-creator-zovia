import { NavLink } from "react-router-dom";
import PageTop from "../components/PageTop";
import { waLink } from "../siteConfig";

export default function ZorgaanbodPage() {
  return (
    <>
      <PageTop
        kicker="Zorg op maat"
        title="Van persoonlijke verzorging tot intensieve begeleiding."
        description="Iedere zorgvraag is uniek. Daarom kijken we samen welke ondersteuning nodig is en hoe we dit op een prettige manier in uw dagelijkse ritme inpassen."
        actions={
          <>
            <NavLink className="btn btn-primary" to="/contact-zorg-aanvragen">
              Vraag zorg aan
            </NavLink>
            <a
              className="btn btn-ghost"
              href={waLink("Hallo Zovia Thuiszorg, ik wil graag weten welke zorg bij mijn situatie past.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Bespreek via WhatsApp
            </a>
          </>
        }
      />

      <section className="container section reveal">
        <div className="grid-2">
          <article className="service">
            <h3>Persoonlijke verzorging</h3>
            <p>Ondersteuning bij wassen, aankleden, eten, drinken en dagelijkse zelfzorg.</p>
          </article>
          <article className="service">
            <h3>Verpleging thuis</h3>
            <p>Verpleegkundige handelingen en observatie, afgestemd op uw medisch zorgplan.</p>
          </article>
          <article className="service">
            <h3>Begeleiding en structuur</h3>
            <p>Ondersteuning bij dagritme, administratie, afspraken en zelfredzaamheid.</p>
          </article>
          <article className="service">
            <h3>Mantelzorgondersteuning</h3>
            <p>Advies en tijdelijke overname om mantelzorg duurzaam vol te houden.</p>
          </article>
          <article className="service">
            <h3>Terminale zorg</h3>
            <p>Respectvolle begeleiding in de laatste levensfase met aandacht voor comfort en rust.</p>
          </article>
          <article className="service">
            <h3>Signalering en afstemming</h3>
            <p>Wij signaleren veranderingen en stemmen waar nodig af met artsen en andere partners.</p>
          </article>
        </div>
      </section>
    </>
  );
}
