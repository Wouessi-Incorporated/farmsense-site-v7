import { useRouter } from 'next/router';

 
export default function AboutPage() {

   const router = useRouter();
    const isFr = router.locale === 'fr';


  return (
    <div>
   {isFr ? (

 <div>
      <section className="section">
        <h2>About FARMSENSE</h2>
        <p className="section-lead">
          FARMSENSE was created by a multidisciplinary team of AI engineers, livestock specialists,
          veterinarians, IoT experts and food security practitioners who share one mission: to protect animals,
          secure farmer income and strengthen national food systems.
        </p>
        <p>
          The platform combines modern AI with practical field insights to deliver an inclusive solution that
          works in real-world farms, from small family operations to large industrial sites and national
          programmes.
        </p>
      </section>
    </div>


   ): (
 <div>
      <section className="section">
        <h2>À propos de FARMSENSE</h2>
        <p className="section-lead">
          FARMSENSE a été créé par une équipe pluridisciplinaire d’ingénieurs en IA, de vétérinaires,
          d’experts de l’élevage, de spécialistes IoT et de praticiens de la sécurité alimentaire, avec une
          mission simple : protéger les animaux, sécuriser les revenus des éleveurs et renforcer les systèmes
          alimentaires nationaux.
        </p>
        <p>
          La plateforme associe les meilleures technologies d’IA aux réalités du terrain pour offrir une
          solution inclusive, utilisable aussi bien dans les petits élevages familiaux que dans les grandes
          exploitations industrielles et les programmes nationaux.
        </p>
      </section>
    </div>


   )} 
  
    </div>
);
}