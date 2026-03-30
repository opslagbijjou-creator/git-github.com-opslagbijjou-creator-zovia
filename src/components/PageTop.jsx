export default function PageTop({ kicker, title, description, actions }) {
  return (
    <section className="top-banner reveal">
      <div className="container top-banner__inner">
        <div className="top-banner__content">
          {kicker ? <p className="top-banner__kicker">{kicker}</p> : null}
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
          {actions ? <div className="top-banner__actions">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}
