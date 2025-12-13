export default function ProduitsKitsPage() {
  return (
    <div>
      <section className="section">
        <h2>Kits & Modules FARMSENSE</h2>
        <p className="section-lead">
          FARMSENSE propose des kits modulaires pour les petits élevages, les fermes commerciales, les
          coopératives et les programmes nationaux. Chaque kit combine IA, capteurs et connectivité adaptés
          au contexte local.
        </p>
        <div className="grid-2">
          <div className="card">
            <h3>Starter Kit</h3>
            <p>
              Idéal pour les petits élevages de volailles ou mixtes. Inclut une caméra IA, des capteurs
              environnementaux essentiels et l’accès à l’application mobile, aux SMS et à l’USSD.
            </p>
          </div>
          <div className="card">
            <h3>Farmer Pro & Enterprise</h3>
            <p>
              Pour les grandes fermes et les coopératives : réseau de caméras, capteurs étendus, micro-lab
              et tableaux de bord analytiques complets.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}