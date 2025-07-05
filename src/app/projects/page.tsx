import ProjectBox from '@/components/ProjectBox'; // Importe le composant ProjectBox

export default function ProjectsPage() {

  const projects = [
    {
      id: 1,
      title: "Application de réservation de Vélib",
      description: "Une brève description de mon premier projet, axée sur les fonctionnalités clés et les technologies utilisées.",
      link: "/SAEVlib"
    },
    {
      id: 2,
      title: "Application de Portfolio",
      description: "Développement d'une application de portfolio dynamique pour présenter mes compétences et réalisations en développement web.",
      link: "/portfolio-app"
    },
    {
      id: 3,
      title: "Site E-commerce Innovant",
      description: "Création d'un site de commerce électronique complet avec gestion des produits, panier d'achat et système de paiement sécurisé.",
      link: "/projets/e-commerce-site"
    }
  ];

  return (
    <section className="py-16 bg-zinc-900"> {/* Section principale des projets */}
      <h2 className="text-4xl font-bold text-center text-white mb-12">Mes Projets</h2>

      {/* Texte d'introduction ajouté ici */}
      <p className="text-lg text-zinc-300 text-center max-w-3xl mx-auto mb-16 px-4">
        Découvrez ci-dessous une sélection de mes travaux récents. Chaque projet représente une opportunité
        d'appliquer et d'élargir mes compétences en développement web, de la conception à l'implémentation.
        Cliquez sur "En savoir plus" pour une description détaillée et les technologies utilisées.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map(project => (
          <ProjectBox
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}