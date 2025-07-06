import ProjectBox from '@/components/ProjectBox'; // Importe le composant ProjectBox
import Section from '@/components/Section';
import SectionParagraph from '@/components/SectionParagraph';

export default function ProjectsPage() {

  const projects = [
    {
      id: 1,
      title: "Application de réservation de Vélib",
      description: "La SAE Vélib était un projet de deuxième année de BUT Informatique où, avec une équipe, j'ai développé une application web et mobile de réservation de vélos en libre-service. L'objectif était de créer une solution complète et modulaire, incluant une API REST sécurisée (Django, PostgreSQL), et des interfaces utilisateur (Next.js, Flutter), le tout conteneurisé avec Docker.",
      link: "/SAEVlib"
    },
    {
      id: 2,
      title: "Application de Portfolio",
      description: "Pour la création de ce portfolio, j'ai décidé d'utiliser next.js afin de mettre en application tout ce que j'ai appris sur ce framework durant la SAE 3.01. J'ai ainsi pu mettre en pratique mes nouvelles connaissances et mes nouvelles competences. Je compte encore améliorer ce portfolio dans le futur, notamment en ajoutant des projets supplémentaires et en améliorant la qualité du code.",
      link: "/portfolio-app"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4">
        {projects.map(project => (
          <ProjectBox
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>

      <Section>
        <SectionParagraph>
          De nombreux projets à venir ...
        </SectionParagraph>
      </Section>
    </section>
  );
}