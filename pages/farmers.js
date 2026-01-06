import { useRouter } from "next/router";

export default function FarmersPage() {

  const router = useRouter();
  const isFr = router.locale == 'fr';

  return (

    <div>{isFr ? (<div>
      <section className="section">
        <h2>Conçu pour les éleveurs</h2>
        <p className="section-lead">
          FARMSENSE a été pensé pour les réalités du terrain. Chaque module répond à un problème concret
          rencontré par les éleveurs : maladies non détectées, mortalité, chaleur, manque de surveillance
          nocturne, absence de vétérinaire et pertes liées à l’alimentation.
        </p>
        <div className="grid-2">
          <div className="card">
            <h3>Détection précoce des maladies</h3>
            <p>
              Vision par ordinateur, analyse sonore et capteurs environnementaux se combinent pour repérer
              les anomalies 2 à 5 jours avant l’apparition de symptômes visibles.
            </p>
          </div>
          <div className="card">
            <h3>Moins de mortalité, plus de revenus</h3>
            <p>
              En réduisant les pertes évitables et en améliorant l’efficacité alimentaire, FARMSENSE aide les
              éleveurs à stabiliser leur production et à sécuriser leurs revenus.
            </p>
          </div>
        </div>
      </section>
    </div>) : (
      <div>
        <section className="section">
          <h2>Designed for livestock farmers</h2>
          <p className="section-lead">
            FARMSENSE was designed from the field, not from a lab. Every feature responds to a real problem
            experienced by poultry, cattle, small ruminant and aquaculture farmers: late disease detection,
            heat stress, lack of night monitoring, poor water quality and absence of veterinary support.
          </p>
          <div className="grid-2">
            <div className="card">
              <h3>Early disease detection</h3>
              <p>
                Computer vision, sound analysis and environmental data combine to detect anomalies 48–120 hours
                before visible symptoms, so farmers can act earlier and avoid major losses.
              </p>
            </div>
            <div className="card">
              <h3>Lower mortality, higher income</h3>
              <p>
                By reducing preventable losses and improving feed efficiency, FARMSENSE helps farmers stabilize
                production, reduce stress and secure long-term revenue.
              </p>
            </div>
          </div>
        </section>
      </div>
    )}
    </div>

  );
}