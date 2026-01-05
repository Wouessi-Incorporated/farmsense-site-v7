import Link from 'next/link';
import VideoSection from '../../src/components/VideoSection';

export default function AccueilPage() {
  return (
    <div>
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
    </div>
  );
}