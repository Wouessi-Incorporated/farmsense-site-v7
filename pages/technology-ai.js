import {useRouter} from 'next/router';
export default function TechnologyAIPage() {
  const router = useRouter();
  const isFr = router.locale === 'fr';
  return (
    <div>
    {isFr ? ( <div>
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
    </div>) : (<div>
      <section className="section">
        <h2>Technology & Artificial Intelligence</h2>
        <p className="section-lead">
          FARMSENSE combines computer vision, behavioural AI, acoustic analysis, environmental sensing,
          micro-lab diagnostics and a hybrid edge–cloud architecture to deliver real-time and predictive
          intelligence for livestock systems.
        </p>
        <div className="grid-2">
          <div className="card">
            <h3>Computer vision & sound</h3>
            <p>
              Cameras and microphones continuously analyse movement, posture, sound patterns and grouping
              behaviour to detect early signs of stress or disease.
            </p>
          </div>
          <div className="card">
            <h3>Environmental & micro-lab data</h3>
            <p>
              Sensors for temperature, humidity, ammonia, CO₂ and water quality, combined with on-site
              micro-lab tests, feed a central AI engine that scores risk and recommends actions.
            </p>
          </div>
        </div>
      </section>
    </div>)}
    

    </div>
  );
}