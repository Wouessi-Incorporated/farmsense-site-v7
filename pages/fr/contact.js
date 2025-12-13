export default function ContactPage() {
  return (
    <div>
      <section className="section">
        <h2>Contact & Support</h2>
        <p className="section-lead">
          Que vous soyez éleveur, coopérative, représentant d’un ministère, investisseur ou partenaire
          technique, l’équipe FARMSENSE est disponible pour vous accompagner.
        </p>
        <div className="grid-2">
          <div className="card">
            <h3>Contacts généraux</h3>
            <p>
              Email : support@farmsense.global<br />
              Site web : https://farmsense.global
            </p>
          </div>
          <div className="card">
            <h3>Gouvernements & investisseurs</h3>
            <p>
              Gouvernements : gov@farmsense.global<br />
              Investisseurs : investors@farmsense.global
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}