import {useRouter} from 'next/router';

export default function GovernmentProgrammePage() {
  const router = useRouter();
  const isFr = router.locale == 'fr';
  return (
    <div>

    {isFr ? ( <div>
      <section className="section">
        <h2>Programme gouvernemental national</h2>
        <p className="section-lead">
          FARMSENSE permet aux ministères de l’Agriculture, aux agences de l’élevage et aux programmes de
          sécurité alimentaire de déployer un réseau national d’intelligence pour l’élevage, basé sur l’IA
          et accessible jusque dans les zones les plus reculées.
        </p>
        <div className="grid-2">
          <div className="card">
            <h3>Objectifs nationaux</h3>
            <p>
              Améliorer la sécurité alimentaire, détecter les épidémies plus tôt, moderniser la collecte de
              données et renforcer la résilience climatique de la filière animale.
            </p>
          </div>
          <div className="card">
            <h3>Déploiement en trois phases</h3>
            <p>
              Phase pilote, extension régionale puis déploiement national avec tableaux de bord multi-niveaux
              (ferme, région, État).
            </p>
          </div>
        </div>
      </section>
    </div>) : (<div>
      <section className="section">
        <h2>National Government Programme</h2>
        <p className="section-lead">
          FARMSENSE enables ministries of agriculture, livestock agencies and food security programmes to
          deploy a nationwide, AI-powered livestock intelligence network, turning fragmented farms into a
          coordinated, data-driven system.
        </p>
        <div className="grid-2">
          <div className="card">
            <h3>National objectives</h3>
            <p>
              Improve food security, detect disease outbreaks earlier, modernise livestock data, support
              climate resilience and increase farmer income across the country.
            </p>
          </div>
          <div className="card">
            <h3>Three-phase deployment</h3>
            <p>
              Pilot & validation, regional expansion and national scale-up, with dashboards for districts,
              regions and national decision-makers.
            </p>
          </div>
        </div>
      </section>
    </div>) }
    </div>
  );
}