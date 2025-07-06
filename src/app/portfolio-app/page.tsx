import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import SectionParagraph from '@/components/SectionParagraph';
import KeyValueList from '@/components/KeyValueList';
import LanguageGridPortfolio from '@/components/portfolio-app/LanguageGridPortfolio';
import ProjectRepoButton from '@/components/ProjectRepoButton';

export default function PortfolioPage() {
  const portfolioRepoLink = "https://github.com/MaximeStepkowski/Portfolio";

  return (
    <div className="py-16 min-h-screen">
      <h1 className="text-5xl font-bold text-center text-white mb-12">Création de mon portfolio</h1>

      <Section>
        <SectionTitle>Contexte et Objectifs du Portfolio</SectionTitle>
        <SectionParagraph>
          Ce portfolio a été conçu comme une vitrine interactive de mes compétences et de mes projets en développement informatique. L'objectif principal est de présenter mes réalisations de manière claire et engageante, en mettant en lumière les technologies que je maîtrise et ma capacité à résoudre des problèmes concrets.
        </SectionParagraph>
        <SectionParagraph>
          Il vise à démontrer ma polyvalence en développement web et mobile, ma compréhension des architectures logicielles modernes, et ma capacité à mener des projets de bout en bout. Ce portfolio est également un outil d'apprentissage continu, me permettant d'expérimenter de nouvelles approches de design et d'optimisation.
        </SectionParagraph>
        <SectionParagraph>
          La création de ce site m'a permis d'approfondir mes connaissances en développement front-end et d'appréhender les meilleures pratiques en matière d'expérience utilisateur (UX) et de performance web. C'est une démarche personnelle pour structurer et valoriser mon parcours.
        </SectionParagraph>
      </Section>

      <Section>
        <SectionTitle>Stack Technique du Portfolio</SectionTitle>
        <SectionParagraph>
          La réalisation de ce portfolio a été l'occasion d'appliquer et de consolider mes compétences avec un ensemble de technologies clés pour le développement web moderne :
        </SectionParagraph>
        <LanguageGridPortfolio/>
        <SectionParagraph>
          J'ai spécifiquement utilisé <strong>Next.js</strong> pour le framework React, ce qui m'a permis d'appliquer ce que j'ai appris lors de la SAE 3.01. Pour le style, <strong>Tailwind CSS</strong> a été choisi pour sa flexibilité et sa rapidité de développement, permettant une conception rapide et modulaire de l'interface utilisateur. La gestion de version et l'hébergement du site sont assurés par <strong>GitHub / GitHub Pages</strong>.
        </SectionParagraph>
      </Section>

      <Section>
        <SectionTitle>Défis et Apprentissages</SectionTitle>
        <SectionParagraph>
          La conception de mon portfolio a présenté son propre ensemble de défis :
        </SectionParagraph>
        <SectionParagraph>
          Le premier défi a été de concilier un design attractif et moderne avec une excellente performance et accessibilité. Il a fallu optimiser les images, le chargement des polices et le code pour garantir une expérience utilisateur fluide et rapide sur tous les appareils, sans compromettre l'esthétique.
        </SectionParagraph>
        <SectionParagraph>
          Un autre enjeu majeur a été la structuration du contenu pour qu'il soit clair, concis et pertinent pour un public professionnel. Sélectionner les projets les plus représentatifs, résumer des expériences complexes et les présenter de manière cohérente a demandé une réflexion approfondie sur la hiérarchisation de l'information.
        </SectionParagraph>
        <SectionTitle>Objectifs Personnels Atteints</SectionTitle>
        <KeyValueList
          items={[
            { title: "Maîtrise de Next.js", description: "Approfondir mes compétences en Next.js, notamment les concepts de rendu, la configuration du site pour le rendre stratique et l'optimisation des performances." },
            { title: "Design Responsive", description: "Concevoir un site entièrement responsive et adaptable à différentes tailles d'écran en utilisant Tailwind CSS." },
            { title: "Optimisation de l'Expérience Utilisateur", description: "Mettre en œuvre les meilleures pratiques pour l'UX/UI, afin de créer un portfolio intuitif et agréable à parcourir." },
            { title: "Autonomie du Projet", description: "Gérer l'intégralité du cycle de vie du projet, de la conception initiale au déploiement final." },
            { title: "Affinement de la Présentation", description: "Apprendre à synthétiser et à présenter mes projets et compétences de manière professionnelle et percutante." },
          ]}
        />
      </Section>

      <Section>
        <SectionTitle>Réalisations Clés du Portfolio</SectionTitle>
        <KeyValueList
          items={[
            { title: "Architecture Front-end Robuste", description: "Construction d'une architecture front-end modulaire et scalable avec Next.js, facilitant l'ajout futur de contenu." },
            { title: "Design UI/UX Personnalisé", description: "Création d'une interface utilisateur unique et moderne, reflétant ma personnalité et mes compétences, entièrement personnalisée avec Tailwind CSS." },
            { title: "Optimisation des Performances", description: "Mise en place de techniques d'optimisation (non optimisation des images, compression d'images, etc.) pour un chargement rapide et une navigation fluide." },
            { title: "Intégration d'éléments interactifs", description: "Développement de composants interactifs pour une expérience utilisateur dynamique et engageante." },
            { title: "Déploiement Continu", description: "Mise en place d'un processus de déploiement continu via un service d'hébergement, garantissant des mises à jour rapides et fiables." },
          ]}
        />
      </Section>

      <Section>
        <SectionTitle>Bilan de Compétences et Développement Personnel</SectionTitle>
        <SectionParagraph>
          La création de ce portfolio a été une étape cruciale dans mon développement professionnel. Elle a solidifié mes compétences techniques en développement front-end et a renforcé ma capacité à transformer une idée en un produit fini, performant et esthétique. C'est également un témoignage de ma persévérance et de mon souci du détail.
        </SectionParagraph>
        <SectionTitle>Compétences Clés Renforcées :</SectionTitle>
        <KeyValueList
          items={[
            { title: "Développement Front-end", description: "Expertise accrue avec React et Next.js pour des applications web performantes et modernes." },
            { title: "Design et UI/UX", description: "Capacité à concevoir des interfaces utilisateur intuitives et esthétiques avec Tailwind CSS." },
            { title: "Optimisation Web", description: "Maîtrise des techniques d'optimisation pour des sites rapides." },
            { title: "Gestion de Projet Personnel", description: "Organisation et exécution d'un projet personnel de bout en bout, de la planification au déploiement." },
            { title: "Autonomie et Résolution de Problèmes", description: "Capacité à identifier et résoudre des problèmes techniques de manière autonome." },
          ]}
        />
        <SectionParagraph>
          Ce portfolio représente non seulement une collection de mes travaux, mais aussi un parcours d'apprentissage intensif. Il souligne ma détermination à acquérir de nouvelles compétences et à livrer des projets de haute qualité. Je suis convaincu que cette expérience sera un atout majeur pour mes futures collaborations professionnelles.
        </SectionParagraph>
      </Section>

      <Section>
        <SectionTitle>Hébergement Actuel et Prochaines Évolutions</SectionTitle>
        <SectionParagraph>
          Actuellement, ce portfolio est hébergé en tant que site statique, ce qui assure une excellente rapidité de chargement et une grande fiabilité. Cependant, j'envisage de le déployer prochainement de manière dynamique pour explorer des fonctionnalités avancées et enrichir l'expérience utilisateur avec des interactions plus complexes et une potentielle intégration backend.
        </SectionParagraph>
      </Section>

      <Section>
        <ProjectRepoButton repoLink={portfolioRepoLink} />
      </Section>
    </div>
  );
}