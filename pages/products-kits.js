import {useRouter} from "next/router";


export default function ProductsKitsPage() {
    const router = useRouter();
    const isFr = router.locale ==='fr';


  return (
    <div>
    {isFr ? (<div>
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
    </div>) : (<div>
      <section className="section">
        <h2>FARMSENSE Kits & Modules</h2>
        <p className="section-lead">
          FARMSENSE offers modular kits for small farms, commercial operations, cooperatives and national
          programmes. Each kit combines AI, sensors and connectivity adapted to the local context.
        </p>
        <div className="grid-2">
          <div className="card">
            <h3>Starter Kit</h3>
            <p>
              Ideal for small poultry or mixed farms. Includes one AI camera, core environmental sensors and
              access to the mobile app, SMS and USSD interface.
            </p>
          </div>
          <div className="card">
            <h3>Farmer Pro & Enterprise Kits</h3>
            <p>
              For larger farms and cooperatives: multi-camera setups, extended sensor networks, micro-lab
              modules and full analytics dashboards.
            </p>
          </div>
        </div>
      </section>
    </div>)}
    </div>
  );
}