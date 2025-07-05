import Section from '@/components/about/Section';
import SectionTitle from '@/components/about/SectionTitle';
import SectionParagraph from '@/components/about/SectionParagraph';
import KeyValueList from '@/components/KeyValueList';
import LanguageGridMin from '@/components/SAEVlib/LanguageGridMin';
import ProjectRepoButton from '@/components/SAEVlib/ProjectRepoButton';

export default function VelibProjectPage() {
  return (
    <div className="py-16 min-h-screen">
      <h1 className="text-5xl font-bold text-center text-white mb-12">Projet de Réservation de Vélib</h1>

      <Section>
        <SectionTitle >Contexte du Projet SAE</SectionTitle>
        <SectionParagraph >
          Au cours du premier semestre de ma deuxième année de BUT Informatique, j'ai collaboré avec quatre camarades sur le développement d'une application de réservation de Vélib, disponible sur web et mobile. Ce projet de SAE (Situation d'Apprentissage et d'Évaluation) visait à créer un système d'information complet pour la gestion de vélos en libre-service, s'inscrivant dans le cadre de la mobilité urbaine.
        </SectionParagraph>
        <SectionParagraph >
          L'objectif principal était de refactoriser et d'enrichir une solution logicielle existante. Nous avons conçu une application capable de pallier les lacunes de l'application officielle, développé une API REST sécurisée et documentée, et conteneurisé l'ensemble des services avec Docker. Notre ambition était de livrer une solution complète et modulaire, intégrant PostgreSQL pour la base de données, Django pour l'API, Next.js pour le front-end web, et Flutter pour l'application mobile.
        </SectionParagraph>
        <SectionParagraph>
          Le projet a été mené selon une approche agile, en privilégiant le développement piloté par les tests (TDD). L'organisation du travail était structurée par la répartition des tâches, avec une estimation précise de la difficulté et du temps requis. Les phases clés incluaient l'analyse des besoins (UML), la conception architecturale, le développement, les tests, le déploiement et la documentation.
        </SectionParagraph>
      </Section>

      <Section>
        <SectionTitle >Stack Technique</SectionTitle>
        <SectionParagraph >
          Ce projet a été une formidable opportunité de renforcer mes compétences sur des technologies essentielles au développement d'applications modernes :
        </SectionParagraph>
        <LanguageGridMin />
        <SectionParagraph >
          Nous avons spécifiquement utilisé PostgreSQL pour la gestion des données, Django pour l'API REST, Next.js pour l'interface web, et Flutter pour l'expérience mobile. L'ensemble a été complété par des pratiques de modélisation UML, l'approche TDD et la conteneurisation via Docker pour optimiser le déploiement.
        </SectionParagraph>
      </Section>

      <Section>
        <SectionTitle >Défis et Apprentissages</SectionTitle>
        <SectionParagraph >
          Le projet a présenté son lot de défis, dont deux problèmes majeurs.
        </SectionParagraph>
        <SectionParagraph >
          Le premier concernait la récupération des stations Vélib pour l'affichage cartographique. Nous avons rencontré des irrégularités dans la taille des paquets de données reçus, entraînant l'absence d'affichage de certaines stations. La solution a été d'implémenter une pagination, récupérant les stations par blocs de 100, ce qui a stabilisé l'affichage et résolu le problème de manière efficace.
        </SectionParagraph>
        <SectionParagraph >
          Le second défi était lié à la fonctionnalité de mise en favori des stations. Malgré l'affichage correct de l'état de favori après un clic, une station incorrecte apparaissait dans la liste des favoris. Par manque de temps avant la soutenance, cette anomalie n'a malheureusement pas pu être résolue et reste un point à améliorer.
        </SectionParagraph>
        <SectionTitle >Objectifs Personnels</SectionTitle>
        <KeyValueList
          items={[
            { title: "Maîtrise technologique", description: "Intégrer de nouvelles technologies (Django, Next.js, Flutter, PostgreSQL, Docker) dans un écosystème cohérent et performant." },
            { title: "Application agile et TDD", description: "Appliquer concrètement les principes agiles et le TDD pour des itérations rapides et un code de qualité." },
            { title: "Contribution et collaboration", description: "Apporter une contribution significative à l'équipe et développer des compétences de collaboration et d'auto-organisation." },
            { title: "Solution fonctionnelle de bout en bout", description: "Développer une solution complète, de la base de données aux applications client." },
            { title: "Gestion du temps et du stress", description: "Gérer le temps et le stress face aux complexités techniques et aux délais serrés." },
          ]}
        />
      </Section>

      <Section>
        <SectionTitle >Réalisations Clés</SectionTitle>
        <KeyValueList
          items={[
            { title: "Architecture Microservices Robuste", description: "Conception et implémentation d'une API REST performante avec Django et PostgreSQL, orchestrée via Docker Compose, facilitant les tests et le déploiement." },
            { title: "Maîtrise Technologique Avancée", description: "Acquisition d'une solide expérience pratique avec Django, Next.js et Flutter, assurant une communication fluide et sécurisée." },
            { title: "Adoption du TDD et Qualité du Code", description: "Application réussie de la méthodologie TDD, contribuant à un code fiable et à une détection précoce des anomalies." },
            { title: "Application Mobile Conviviale", description: "Développement de l'application mobile V-Lib avec Flutter, mettant l'accent sur une expérience utilisateur intuitive et ergonomique." },
            { title: "Collaboration Efficace en Équipe", description: "Participation active aux rituels agiles, partage des connaissances et résolution collaborative des problèmes complexes, renforçant la dynamique d'équipe." },
          ]}
        />
      </Section>

      <Section>
        <SectionTitle >Bilan de Compétences et Développement Personnel</SectionTitle>
        <SectionParagraph >
          Les SAE S3.01 et S4.01 ont été des périodes de croissance intense, transformant les connaissances théoriques en compétences pratiques et me préparant aux exigences du monde professionnel. Mes capacités techniques en développement web et mobile, ainsi qu'en gestion de bases de données, ont été consolidées, tandis que mes compétences en gestion de projet agile et en collaboration d'équipe ont été affinées.
        </SectionParagraph>
        <SectionTitle >Progression des 6 compétences du BUT</SectionTitle>
        <KeyValueList
          items={[
            { title: "Développement d'Application", description: "J'ai développé une API Django et des applications web (Next.js) et mobile (Flutter) en partant de zéro, sans expérience préalable, apprenant sur le tas." },
            { title: "Optimisation d'Application", description: "Bien que mes camarades aient géré cette compétence, j'ai beaucoup appris sur l'optimisation des composants, notamment par la pagination, en observant mes camarades faire." },
            { title: "Administration de Systèmes Communicants", description: "J'ai amélioré ma compréhension de la communication inter-services (API Django et applications Next.js/Flutter) pour la récupération et la modification de données." },
            { title: "Gestion des Données", description: "J'ai approfondi ma maîtrise de la gestion des données via l'API et la base de données, permettant des interactions directes depuis les interfaces utilisateur." },
            { title: "Conduite de Projet", description: "J'ai renforcé mes compétences en gestion de projet, ayant souvent pris le rôle de chef d'équipe et apprenant des approches de mes camarades." },
            { title: "Collaboration en Équipe IT", description: "J'ai progressé en travaillant en équipe de cinq, utilisant GitHub (Pull Requests) et le Pair Programming pour une collaboration efficace et un apprentissage mutuel." },
          ]}
        />
        <SectionTitle >Feedback de mes camarades et professeurs</SectionTitle>
        <SectionParagraph>
          Les retours des professeurs, soulignant la "qualité de ce travail" et mentionnant que "Votre travail touche à l'excellence", sont une grande source de motivation. Mes camarades ont apprécié ma capacité à "transmettre la bonne humeur dans le groupe", ma "facilité pour les diagrammes" et mes compétences en "frontend". Ces atouts, combinés à une détermination et une capacité d'apprentissage rapide, seront précieux pour toute équipe de développement.
        </SectionParagraph>
      </Section>

      <Section>
        <ProjectRepoButton repoLink="https://github.com/NoWauu/V-lib/tree/dev" />
      </Section>
    </div>
  );
}