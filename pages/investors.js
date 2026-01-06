import {useRouter} from 'next/router';

export default function InvestorsPage() {

    const router = useRouter();
    const isFr = router.locale === 'fr';
  return (
    <div>
   {isFr ? (<div>
      <section className="section">
        <h2>Espace Investisseurs</h2>
        <p className="section-lead">
          FARMSENSE ouvre une nouvelle catégorie : l’intelligence artificielle appliquée à l’élevage pour les
          marchés émergents, les programmes nationaux et des millions d’éleveurs. Notre espace Investisseurs
          donne accès, sous NDA, aux modèles financiers, à la feuille de route et aux opportunités de
          partenariat.
        </p>
        <div className="grid-2">
          <div className="card">
            <h3>Modèle économique</h3>
            <p>
              Vente de matériel, abonnements SaaS, programmes gouvernementaux, diagnostics et services de
              données stratégiques pour les partenaires institutionnels.
            </p>
          </div>
          <div className="card">
            <h3>Impact & opportunités</h3>
            <p>
              FARMSENSE contribue directement à la sécurité alimentaire, à la résilience climatique et à
              l’augmentation des revenus ruraux, tout en s’attaquant à des pertes de plusieurs milliards de
              dollars par an dans la filière élevage.
            </p>
          </div>
        </div>
      </section>
    </div>) : (<div>
      <section className="section">
        <h2>Investor Data Room</h2>
        <p className="section-lead">
          FARMSENSE defines a new category: AI-powered livestock intelligence for emerging markets, national
          programmes and millions of farmers. Our Investor Data Room provides structured access to financial
          models, traction, roadmap and partnership opportunities.
        </p>
        <div className="grid-2">
          <div className="card">
            <h3>Business model</h3>
            <p>
              Hardware sales, SaaS subscriptions, government deployment packages, diagnostics and strategic
              data insights for enterprise and institutional partners.
            </p>
          </div>
          <div className="card">
            <h3>Impact & opportunity</h3>
            <p>
              FARMSENSE directly supports food security, climate resilience and rural income while addressing
              a multi-billion dollar global loss problem in livestock systems.
            </p>
          </div>
        </div>
      </section>
    </div>)}
    </div>
  );
}