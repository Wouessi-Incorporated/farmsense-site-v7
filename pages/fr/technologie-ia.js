export default function TechnologieIAPage() {
  return (
    <div>
      <section className="section">
        <h2>Technologie & Intelligence artificielle</h2>
        <p className="section-lead">
          FARMSENSE combine vision par ordinateur, IA comportementale, analyse acoustique, capteurs
          environnementaux, micro-laboratoire portable et architecture hybride edge–cloud pour fournir une
          intelligence continue et prédictive aux systèmes d’élevage.
        </p>
        <div className="grid-2">
          <div className="card">
            <h3>Vision & sons</h3>
            <p>
              Les caméras et les capteurs audio analysent en permanence le mouvement, la posture, les sons
              et les regroupements anormaux pour repérer le stress et les maladies émergentes.
            </p>
          </div>
          <div className="card">
            <h3>Données environnementales & micro-lab</h3>
            <p>
              Température, humidité, NH₃, CO₂, qualité de l’eau et analyses rapides sur site alimentent un
              moteur d’IA central qui calcule un indice de risque et recommande des actions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}