import Link from 'next/link';
import VideoSection from '../src/components/VideoSection';
import {useRouter} from "next/router";


export default function HomePage() {

    const router = useRouter();
    const isFr = router.locale == 'fr';


  return (

    <div>
    {isFr ? (  <div>
      <section className="hero">
        <div className="hero-text">
          <div className="hero-kicker">PLATEFORME D’INTELLIGENCE POUR L’ÉLEVAGE</div>
          <h1>FARMSENSE™ — L’intelligence pour chaque ferme. Partout.</h1>
          <p className="hero-subtitle">
            FARMSENSE™ est une plateforme d’intelligence artificielle pour l’élevage qui aide les éleveurs,
            les coopératives et les gouvernements à prévenir les maladies, réduire la mortalité et sécuriser
            les revenus, même dans les zones rurales éloignées et peu connectées.
          </p>
          <div className="hero-badges">
            <span className="badge">IA prédictive</span>
            <span className="badge">Fonctionne avec ou sans Internet</span>
            <span className="badge">Volailles, bovins & aquaculture</span>
            <span className="badge">Tableaux de bord nationaux</span>
          </div>
          <div className="hero-actions">
            <Link href="/fr/contact" className="btn-primary">
              Demander une démonstration
            </Link>
            <Link href="/fr/programmes-gouvernementaux" className="btn-secondary">
              Programme gouvernemental
            </Link>
          </div>
        </div>
        <VideoSection />
      </section>

      <section className="section">
        <h2>Le problème que nous résolvons</h2>
        <p className="section-lead">
          Dans de nombreux pays, les éleveurs perdent entre 10 % et 40 % de leurs animaux chaque année à
          cause de maladies détectées trop tard, du stress thermique, d’une mauvaise ventilation, d’une eau
          de mauvaise qualité et de l’absence de vétérinaire. Ces pertes détruisent les revenus et fragilisent
          la sécurité alimentaire.
        </p>
      </section>
    </div>) : (<div>
      <section className="hero">
        <div className="hero-text">
          <div className="hero-kicker">AI-POWERED LIVESTOCK INTELLIGENCE</div>
          <h1>FARMSENSE™ — Intelligence for every farm. Everywhere.</h1>
          <p className="hero-subtitle">
            FARMSENSE™ is an AI-powered livestock intelligence platform that helps farmers, cooperatives
            and governments prevent disease, reduce mortality, protect revenue and modernize national
            livestock systems — even in remote rural areas with limited infrastructure.
          </p>
          <div className="hero-badges">
            <span className="badge">Predictive AI</span>
            <span className="badge">Works with or without Internet</span>
            <span className="badge">For poultry, cattle & aquaculture</span>
            <span className="badge">Government-ready dashboards</span>
          </div>
          <div className="hero-actions">
            <Link href="/en/contact" className="btn-primary">
              Book a live demo
            </Link>
            <Link href="/en/government-programme" className="btn-secondary">
              Government programme
            </Link>
          </div>
        </div>
        <VideoSection />
      </section>

      <section className="section">
        <h2>The problem we solve</h2>
        <p className="section-lead">
          Across the world, livestock producers lose between 10% and 40% of their animals every year due to
          late disease detection, heat stress, poor ventilation, contaminated water and lack of veterinary
          access. These losses destroy household income and weaken national food security.
        </p>
        <div className="grid-2">
          <div className="card">
            <h3>For farmers</h3>
            <p>
              FARMSENSE helps farmers detect problems 2–5 days earlier, reduce mortality, stabilize growth
              and protect the income of their families — with tools that work even with basic phones.
            </p>
          </div>
          <div className="card">
            <h3>For governments</h3>
            <p>
              FARMSENSE provides national dashboards, risk maps and an early-warning system for animal
              disease, enabling ministries to detect outbreaks sooner and plan targeted interventions.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>How FARMSENSE works</h2>
        <p className="section-lead">
          FARMSENSE combines cameras, environmental sensors, micro-lab diagnostics, edge & cloud AI and
          inclusive interfaces (mobile app, SMS, USSD, local dialect voice) to deliver continuous, predictive
          intelligence for livestock systems.
        </p>
      </section>
    </div>) }
    </div>
    
  );
}