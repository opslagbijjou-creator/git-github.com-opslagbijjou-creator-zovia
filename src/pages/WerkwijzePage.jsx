import { NavLink } from "react-router-dom";
import PageTop from "../components/PageTop";

export default function WerkwijzePage() {
  return (
    <>
      <PageTop
        kicker="Heldere aanpak"
        title="Duidelijke stappen, rust voor cliënt en familie."
        description="Onze werkwijze is overzichtelijk en persoonlijk: van intake tot evaluatie houden we de lijnen kort en afspraken transparant."
        actions={
          <>
            <NavLink className="btn btn-primary" to="/contact-zorg-aanvragen">
              Start met een intake
            </NavLink>
            <NavLink className="btn btn-ghost" to="/zorgaanbod">
              Bekijk zorgvormen
            </NavLink>
          </>
        }
      />

      <section className="container section reveal">
        <div className="steps">
          <article className="step">
            <span>1</span>
            <h3>Aanmelding</h3>
            <p>Via het formulier, e-mail of WhatsApp ontvangen we uw zorgvraag.</p>
          </article>
          <article className="step">
            <span>2</span>
            <h3>Intakegesprek</h3>
            <p>We bespreken wensen, doelen, planning en betrokken personen.</p>
          </article>
          <article className="step">
            <span>3</span>
            <h3>Zorgplan</h3>
            <p>U ontvangt een duidelijk plan met concrete afspraken over de ondersteuning.</p>
          </article>
          <article className="step">
            <span>4</span>
            <h3>Start van zorg</h3>
            <p>Het zorgteam begint met de afgesproken begeleiding en verzorging.</p>
          </article>
          <article className="step">
            <span>5</span>
            <h3>Evaluatie</h3>
            <p>We bespreken regelmatig of de zorg nog goed aansluit op uw situatie.</p>
          </article>
          <article className="step">
            <span>6</span>
            <h3>Bijsturen</h3>
            <p>Wanneer nodig passen we het zorgplan direct en zorgvuldig aan.</p>
          </article>
        </div>
      </section>
    </>
  );
}
